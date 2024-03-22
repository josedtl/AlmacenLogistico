package Framework;

import java.lang.reflect.Field;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class BaseDB {

    private static final Map<String, String> m_Columns = new HashMap<>();

    public static <Entity> boolean fillFrom(ResultSet row, Entity entity) {
        Field[] fields = entity.getClass().getDeclaredFields();
        for (Field field : fields) {
            try {
                field.setAccessible(true); // Necesario para acceder a campos privados.
                String fieldName = field.getName().toUpperCase();

                if (!m_Columns.containsKey(fieldName))
                    continue;

                Object value = row.getObject(fieldName);
                Class<?> fieldType = field.getType();

                // Asignación directa si los tipos son compatibles.
                if (value == null || fieldType.isAssignableFrom(value.getClass())) {
                    field.set(entity, value);
                } else {
                    // Conversión de tipos específicos
                    if (fieldType.equals(Integer.class) || fieldType.equals(int.class)) {
                        field.set(entity, Integer.parseInt(value.toString()));
                    } else if (fieldType.equals(Long.class) || fieldType.equals(long.class)) {
                        field.set(entity, Long.parseLong(value.toString()));
                    } else if (fieldType.equals(Double.class) || fieldType.equals(double.class)) {
                        field.set(entity, Double.parseDouble(value.toString()));
                    } else if (fieldType.equals(Boolean.class) || fieldType.equals(boolean.class)) {
                        field.set(entity, Boolean.parseBoolean(value.toString()));
                    } else if (fieldType.equals(String.class)) {
                        field.set(entity, value.toString());
                    } else if (Enum.class.isAssignableFrom(fieldType)) {
                        field.set(entity, Enum.valueOf((Class<Enum>) fieldType, value.toString()));
                    } else if (fieldType.equals(Timestamp.class)) {
                        String fechaStr = value.toString();
                        SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd");
                        Date fecha = formato.parse(fechaStr);
                        Timestamp timestamp = new Timestamp(fecha.getTime());
                        field.set(entity, timestamp);
                    }
                    // Agrega más tipos según sea necesario
                }
            } catch (Exception e) {
                continue; // Manejo básico de excepciones, ajusta según sea necesario.
            }
        }

        // Aquí podrías llamar a otro método estático si es necesario hacer más
        // operaciones
        return true;
    }

    public static void fillSchemeTable(ResultSet rs) {
        try {
            m_Columns.clear();
            ResultSetMetaData rsmd = rs.getMetaData();
            int columnCount = rsmd.getColumnCount();

            for (int i = 1; i <= columnCount; i++) {
                String columnName = rsmd.getColumnName(i).toUpperCase();
                if (!m_Columns.containsKey(columnName)) {
                    m_Columns.put(columnName, rsmd.getColumnClassName(i));
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    // Otros métodos estáticos o lógica relacionada
}