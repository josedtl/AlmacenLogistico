/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Framework;

//import java.sql.Date;Date
import java.sql.Timestamp;



/**
 *
 * @author david
 */
public class variable {

    private String _String = null;
    private Boolean _Boolean = null;
    private Integer _int = null;
    private Double _double = null;
    private Boolean _OUTPUT = null;
    private String _ParameterName = null;

    public Timestamp getDate() {
        return _Date;
    }

    public void setDate(Timestamp _Date) {
        this._Date = _Date;
    }
    private Timestamp _Date = null;

    /**
     * @return the _String
     */
    public String getString() {
        return _String;
    }

    /**
     * @param _String the _String to set
     */
    public void setString(String value) {
        this._String = value;
    }

    /**
     * @return the _Boolean
     */
    public Boolean getBoolean() {
        return _Boolean;
    }

    /**
     * @param _Boolean the _Boolean to set
     */
    public void setBoolean(Boolean value) {
        this._Boolean = value;
    }

    /**
     * @return the _int
     */
    public Integer getInt() {
        return _int;
    }

    /**
     * @param _int the _int to set
     */
    public void setInt(Integer value) {
        this._int = value;
    }

    /**
     * @return the _double
     */
    public Double getDouble() {
        return _double;
    }

    /**
     * @param _double the _double to set
     */
    public void setDouble(Double value) {
        this._double = value;
    }

    /**
     * @return the _OUTPUT
     */
    public Boolean getOUTPUT() {
        return _OUTPUT;
    }

    /**
     * @param _OUTPUT the _OUTPUT to set
     */
    public void setOUTPUT(Boolean _OUTPUT) {
        this._OUTPUT = _OUTPUT;
    }

    /**
     * @return the _ParameterName
     */
    public String getParameterName() {
        return _ParameterName;
    }

    /**
     * @param _ParameterName the _ParameterName to set
     */
    public void setParameterName(String _ParameterName) {
        this._ParameterName = _ParameterName;
    }

}
