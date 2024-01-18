/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Framework;

/**
 *
 * @author DAVID
 */
public class Convert {

    private int _Int = 0;
    private boolean _Boolean = true;

    public int ConvetInt( boolean Value) {
        if (Value == true) {
            return this._Int = 1;
            
        } else {
            return this._Int = 0;
        }

    }

    public boolean ConvetBoolean(int Value) {
        if (Value == 1) {
            return this._Boolean = true;

        } else {
            return this._Boolean = false;
        }

    }

}
