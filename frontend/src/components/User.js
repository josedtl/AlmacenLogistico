import React, { useState, useEffect } from "react";

const API = process.env.REACT_APP_API;

export const User = () => {

    const [getName, setName] = useState('')
    const [getEmail, setEmail] = useState('')
    const [getPassword, setPassword] = useState('')

    const handleSubmit = async (e) => {

        e.preventDefault();

        //     console.log(API+'/api/General/Get_MarcaItems'); 
        // console.log('API/api/General/Get_MarcaItems/');
    }

    const getMarcas = async () => {
        try {
            const res = await fetch(API + '/api/General/Get_MarcaItems/', { mode: 'cors' });

            const data = await res.json();
            console.log(data);
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getMarcas();
    }, [])

    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={handleSubmit} className="card card-body">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-12 ">
                            <input
                                type="text"
                                onChange={e => { setName(e.target.value) }}
                                className="form-control"
                                value={getName}
                                placeholder="Name"
                                autoFocus
                            />
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-12 ">
                            <input
                                type="email"
                                onChange={e => { setEmail(e.target.value) }}

                                className="form-control"
                                value={getEmail}
                                placeholder="Email"
                                autoFocus
                            />
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <label className="col-sm-12 control-label">Password</label>
                        <div className="col-sm-12 ">
                            <input
                                type="password"
                                onChange={e => { setPassword(e.target.value) }}
                                value={getPassword}
                                className="form-control"
                                placeholder="Password"
                                autoFocus
                            />
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-primary btn-block">
                        Create
                    </button>
                </form>
            </div>
            <div className="col-md-8">

            </div>


        </div>



    )
}