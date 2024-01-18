
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConverterConfig {
	@Value("${path.to.prop.name }")
	private String myProp;
}