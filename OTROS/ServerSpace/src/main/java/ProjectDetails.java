import org.springframework.context.EnvironmentAware;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
 
@Component
public class ProjectDetails implements EnvironmentAware {
 
    private String projectName;
 
    @Override
    public void setEnvironment(Environment environment) {
        this.projectName = environment.getProperty("project.name");
    }
 
    public String getProjectName() {
        return projectName;
    }
 
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
}