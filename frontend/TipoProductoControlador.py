from App import app, mysql
from flask import Flask, render_template, request, redirect, url_for, flash



@app.route('/TipoProducto')
def IndexTipoProducto():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM cat_tipoproducto')
    # cur.callproc("spSelectTipoProductos")
    data = cur.fetchall()
    return render_template("CatTipoProducto.html", employees  = data, )
 


@app.route('/TipoProducto/insert', methods = ['POST'])
def insertTipoProducto():
    if request.method =='POST':

        Nombre= request.form['Nombre']
        Usuario= request.form['Usuario']
        Estado= request.form['Estado']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO cat_tipoproducto (Nombre, Usuario, Estado) VALUES (%s,%s,%s)", (Nombre, Usuario, 1))
        mysql.connection.commit()
        flash(' Contacto registrado')
        return redirect(url_for('IndexTipoProducto'))


@app.route('/TipoProducto/update', methods = ['GET', 'POST'])
def updateTipoProducto():
       if request.method =='POST':
            #  my_data = Data.query.get(request.form.get('id'))
        TipoProductoId= request.form['TipoProductoSelect']
        id = request.form['ProductoId']  
        Nombre = request.form['Nombre']
        Usuario = request.form['Usuario']
        Estado = request.form.get['Estado']
        cur = mysql.connection.cursor()
        cur.execute("""
            UPDATE cat_Producto
            SET Nombre = %s,
                Usuario = %s,
                Estado = %s
            WHERE ProductoId =%s
        """,(Nombre,Usuario,TipoProductoId,Estado,id))
        mysql.connection.commit()
        flash('Contact Editado')
        return redirect(url_for('IndexTipoProducto'))
 

@app.route('/TipoProducto/delete/<id>/', methods = ['GET', 'POST'])
def deleteTipoProducto(id):
        cur=mysql.connection.cursor()
        cur.execute('DELETE FROM cat_tipoproducto WHERE tipoProductoId = {0}'.format(id))
        mysql.connection.commit()
        flash('El contacto a sido removido')
        return redirect(url_for('IndexTipoProducto'))
