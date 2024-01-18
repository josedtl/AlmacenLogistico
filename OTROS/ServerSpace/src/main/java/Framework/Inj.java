/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Framework;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.sql.Types;
import java.util.ArrayList;

/**
 *
 * @author DAVID
 */
public class Inj {

    private static Connection conx = null;
    private static CallableStatement cs;
    private static ArrayList<String> dat = new ArrayList<>();
    private static ArrayList<variable> type = new ArrayList<>();

    public static void IniciarTranssaccion(Boolean Fla) throws SQLException {
        try {
            if (Fla) {
                Conexion cx = new Conexion();
                conx = cx.ConexionBD();
                cs = null;
                conx.setAutoCommit(false);
                type = new ArrayList<>();
                dat = new ArrayList<>();
            } else {
                cs = null;
                type = new ArrayList<>();
                dat = new ArrayList<>();
            }
        } catch (Exception ex) {

        }

    }

    public static void IniciarTranssaccionConsulta() throws SQLException {
        try {
            
                Conexion cx = new Conexion();
                conx = cx.ConexionBD();
                cs = null;
                conx.setAutoCommit(true);
                type = new ArrayList<>();
                dat = new ArrayList<>();
         
        } catch (Exception ex) {

        }

    }
    public static void FinalizarTranssaccion() throws SQLException {
        conx.commit();
        conx.close();
//        conx.setAutoCommit(true);
    }

    public static String getSp() {
        return m_Sp;
    }

    public static void Pmt_String(String Param, String value, Boolean valueB) {
        variable v = new variable();
        v.setParameterName(Param);
        v.setString(value);
        v.setOUTPUT(valueB);
        type.add(v);
        //    dat.add(value);
    }

    public static void Pmt_Boolean(String Param, Boolean value, Boolean valueB) {
        variable v = new variable();
        v.setParameterName(Param);
        v.setInt(value ? 1 : 0);
        v.setOUTPUT(valueB);
        type.add(v);
        //    dat.add(value);
    }

    public static void Pmt_Integer(String Param, Integer value, Boolean valueB) {
        variable v = new variable();
        v.setParameterName(Param);
        v.setInt(value);
        v.setOUTPUT(valueB);
        type.add(v);
        //    dat.add(value);
    }

    public static void Pmt_Double(String Param, Double value, Boolean valueB) {
        variable v = new variable();
        v.setParameterName(Param);
        v.setDouble(value);
        v.setOUTPUT(valueB);
        type.add(v);
        //    dat.add(value);
    }

    public static void Pmt_Date(String Param, Timestamp value, Boolean valueB) {
        variable v = new variable();
        v.setParameterName(Param);
        v.setDate(value);
        v.setOUTPUT(valueB);
        type.add(v);
        //    dat.add(value);
    }

    private static String m_Sp;

    public static String Sp(String value) {
        return m_Sp = value;

    }

    public static Integer RunInsert() throws SQLException {

        Boolean OUTPUT = false;
        String sum = "";
        String suma = "";
        Integer RunValue = 1;
        int con = 0;

        for (int i = 0; i < type.size(); i++) {
            sum += ",?";
        }
        suma = sum.substring(1);
        String parameter = "{CALL " + getSp() + "(" + suma + ")}";
        try {
            cs = conx.prepareCall("" + parameter);
            for (variable t : type) {
                if (t.getInt() == null && t.getBoolean() == null && t.getDouble() == null && t.getDate() == null) {
                    cs.setString(t.getParameterName(), t.getString());
                }
                if (t.getInt() == null && t.getString() == null && t.getDouble() == null && t.getDate() == null) {
                    cs.setInt(t.getParameterName(), t.getBoolean() ? 1 : 0);
                }
                if (t.getInt() == null && t.getString() == null && t.getDouble() == null && t.getDouble() == null) {
                    cs.setTimestamp(t.getParameterName(), t.getDate());
                }
                if (t.getDouble() == null && t.getString() == null && t.getBoolean() == null && t.getDate() == null) {
                    if (t.getOUTPUT()) {
                        cs.registerOutParameter(t.getParameterName(), Types.INTEGER);
                        OUTPUT = true;
                    } else {
                        cs.setInt(t.getParameterName(), t.getInt());

                        if (con == 0) {
                            RunValue = t.getInt();
                            con += 1;
                        }

                    }
                }
                if (t.getInt() == null && t.getString() == null && t.getBoolean() == null && t.getDate() == null) {
                    cs.setDouble(t.getParameterName(), t.getDouble());
                }
            }
            cs.executeUpdate();

            if (OUTPUT) {
                RunValue = cs.getInt(1);
            }

        } catch (SQLException e) {
            if (conx != null) {
                conx.rollback();
                conx.close();
            }
            e.printStackTrace();
            throw new UnsupportedOperationException("Datalater : " + e);
        }
        return RunValue;
    }

    public static Integer RunUpdate() throws SQLException {
        String sum = "";
        String suma = "";
        Integer RunValue = 1;
        int con = 0;

        for (int i = 0; i < type.size(); i++) {
            sum += ",?";
        }
        suma = sum.substring(1);
        String parameter = "{CALL " + getSp() + "(" + suma + ")}";
        try {

            cs = conx.prepareCall("" + parameter);
            for (variable t : type) {
                if (t.getInt() == null && t.getBoolean() == null && t.getDouble() == null && t.getDate() == null) {
                    cs.setString(t.getParameterName(), t.getString());
                }
                if (t.getInt() == null && t.getString() == null && t.getDouble() == null && t.getDate() == null) {
                    cs.setInt(t.getParameterName(), t.getBoolean() ? 1 : 0);
                }
                if (t.getInt() == null && t.getString() == null && t.getDouble() == null && t.getDouble() == null) {
                    cs.setTimestamp(t.getParameterName(), t.getDate());
                }
                if (t.getDouble() == null && t.getString() == null && t.getBoolean() == null && t.getDate() == null) {

                    cs.setInt(t.getParameterName(), t.getInt());

                    if (con == 0) {
                        RunValue = t.getInt();
                        con += 1;
                    }

                }
                if (t.getInt() == null && t.getString() == null && t.getBoolean() == null && t.getDate() == null) {
                    cs.setDouble(t.getParameterName(), t.getDouble());
                }
            }
            cs.execute();

            cs.close();

        } catch (SQLException e) {
            if (conx != null) {
                conx.rollback();
                conx.close();
            }
            e.printStackTrace();
            throw new UnsupportedOperationException("Datalater : " + e);
        }
        return RunValue;
    }

    public static ResultSet RunSelect() throws SQLException {

        ResultSet rs = null;
        String sum = "";
        String suma = "";

        if (type.size() > 0) {
            for (int i = 0; i < type.size(); i++) {
                sum += ",?";
            }
            suma = sum.substring(1);
        }

        try {
     
            String Parmet = "" + getSp();
            cs = conx.prepareCall("{CALL " + Parmet + "(" + suma + ")}");

            for (variable t : type) {
                if (t.getInt() == null && t.getBoolean() == null && t.getDouble() == null && t.getDate() == null) {
                    cs.setString(t.getParameterName(), t.getString());
                }
                if (t.getInt() == null && t.getString() == null && t.getDouble() == null && t.getDate() == null) {
                    cs.setBoolean(t.getParameterName(), t.getBoolean());
                }
                if (t.getDouble() == null && t.getString() == null && t.getBoolean() == null && t.getDate() == null) {
                    cs.setInt(t.getParameterName(), t.getInt());
                }
                if (t.getInt() == null && t.getString() == null && t.getBoolean() == null && t.getDate() == null) {
                    cs.setDouble(t.getParameterName(), t.getDouble());
                }
                if (t.getInt() == null && t.getString() == null && t.getBoolean() == null && t.getDouble() == null) {
                    cs.setTimestamp(t.getParameterName(), t.getDate());
                }
            }

            rs = cs.executeQuery();

        } catch (SQLException e) {
//            if (conx != null) {
//                conx.rollback();
//                conx.close();
//            }
            e.printStackTrace();
            throw new UnsupportedOperationException("Datalater : " + e);
        }
        return rs;
    }

    public static Integer RunDelete() throws SQLException {
        Boolean OUTPUT = false;
        String sum = "";
        String suma = "";
        Integer RunValue = 1;

        for (int i = 0; i < type.size(); i++) {
            sum += ",?";
        }
        suma = sum.substring(1);
        String parameter = "{CALL " + getSp() + "(" + suma + ")}";
        try {

            cs = conx.prepareCall("" + parameter);
            for (variable t : type) {
                if (t.getInt() == null && t.getBoolean() == null && t.getDouble() == null && t.getDate() == null) {
                    cs.setString(t.getParameterName(), t.getString());
                }
                if (t.getInt() == null && t.getString() == null && t.getDouble() == null && t.getDate() == null) {
                    cs.setBoolean(t.getParameterName(), t.getBoolean());
                }
                if (t.getInt() == null && t.getString() == null && t.getDouble() == null && t.getBoolean() == null) {
                    cs.setTimestamp(t.getParameterName(), t.getDate());
                }
                if (t.getDouble() == null && t.getString() == null && t.getBoolean() == null && t.getDate() == null) {
                    if (t.getOUTPUT()) {
                        cs.registerOutParameter(t.getParameterName(), Types.INTEGER);
                        OUTPUT = true;
                    } else {
                        cs.setInt(t.getParameterName(), t.getInt());
                        RunValue = t.getInt();
                    }
                }
                if (t.getInt() == null && t.getString() == null && t.getBoolean() == null && t.getDate() == null) {
                    cs.setDouble(t.getParameterName(), t.getDouble());
                }
            }
            cs.executeUpdate();

            if (OUTPUT) {
                RunValue = cs.getInt(1);
            }

            cs.close();

        } catch (SQLException e) {
            if (conx != null) {
                conx.rollback();
                conx.close();
            }
            e.printStackTrace();
            throw new UnsupportedOperationException("Datalater : " + e);
        }
        return RunValue;
    }
}
