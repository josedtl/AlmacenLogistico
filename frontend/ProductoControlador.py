# from config import app, mysql
from App import app
from flask import Flask, render_template, request, redirect, url_for, flash
from Model.ProductoModel import *



 
@app.route('/Producto')
def Index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM cat_producto')
    data = cur.fetchall()
    cur2 = mysql.connection.cursor()
    # cur2.execute('SELECT * FROM cat_tipoproducto')
    cur2.callproc("spSelectTipoProductos")
    data2 = cur2.fetchall()

    ListaProductos= []
    Item=0
    for rowdata in data :
        for ca in data2:
            
            if ca[0]==rowdata[2]:  
                Item=Item+1
                ListaProductos.append(ProductoModel( 
                    Item,
                    rowdata[0],
                    rowdata[1],
                    rowdata[2],
                    rowdata[3],
                    rowdata[4],
                    ca[1]))
        


    return render_template("CatProducto.html", employees  = ListaProductos, TipoProductoList=data2,UsuarioData='ADM')
 
 
@app.route('/Producto/insert', methods = ['POST'])
def insert():
    if request.method =='POST':

        TipoProductoId= request.form['TipoProductoSelect']
        Nombre=request.form['Nombre']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO cat_producto (Nombre, Usuario, Estado,TipoProductoId) VALUES (%s,%s,%s,%s)", (Nombre, 'DTIMO', 1,TipoProductoId))
        mysql.connection.commit()
        flash('Registro Agregado')
        return redirect(url_for('Index'))
 
 
@app.route('/Producto/update', methods = ['GET', 'POST'])
def update():
       if request.method =='POST':
            #  my_data = Data.query.get(request.form.get('id'))
        TipoProductoId= request.form['TipoProductoSelect']
        id = request.form['ProductoId']  
        Nombre = request.form['Nombre']
        Usuario = request.form['Usuario']
        Estado = request.form['Estado']
        cur = mysql.connection.cursor()
        cur.execute("""
            UPDATE cat_Producto
            SET Nombre = %s,
                Usuario = %s,
                TipoProductoId = %s,
                Estado = %s
            WHERE ProductoId =%s
        """,(Nombre,Usuario,TipoProductoId,Estado,id))
        mysql.connection.commit()
        flash('Registro Editado')
        return redirect(url_for('Index'))
 


 
 
@app.route('/Producto/delete/<id>/', methods = ['GET', 'POST'])
def delete(id):
        cur=mysql.connection.cursor()
        cur.execute('DELETE FROM cat_Producto WHERE ProductoId = {0}'.format(id))
        mysql.connection.commit()
        flash('Registro Eliminado')
        return redirect(url_for('Index'))
 
 