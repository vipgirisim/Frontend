import React, { useState } from 'react'
import axios from 'axios'

const AddAdmin = () => {
    const[Admin, setAdmin] = useState({
        username:  "",
        email:"",
        password: "",
        iban:  "",
        cuzdan:  "",
        falbilgisi: "",
        indirimkodu:  "",
        resimyolu:"",  
        profilyazisi:"", 
        yorumlar:  "",
        yorumsayisi: "",
        yediYirmidort:"",  
        baktigiFalid:"",
        baktigiFalAdi:"",  
        baktigiFalUcreti: "",
        kazandigiKar:"",  
        adminFalciyaYorumlari:"",  
        yaziliFalFiyat:"",  
        canlifalFiyati:"",  
        FalciRutbesi:"",
        KahveFaliSayisi:"", 
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAdmin = {
           // name: Admin.name,
           username: Admin.username,
        email:"",
        password: "",
        iban:  "",
        cuzdan:  "",
        falbilgisi: "",
        indirimkodu:  "",
        resimyolu:"",  
        profilyazisi:"", 
        yorumlar:  "",
        yorumsayisi: "",
        yediYirmidort:"",  
        baktigiFalid:"",
        baktigiFalAdi:"",  
        baktigiFalUcreti: "",
        kazandigiKar:"",  
        adminFalciyaYorumlari:"",  
        yaziliFalFiyat:"",  
        canlifalFiyati:"",  
        FalciRutbesi:"",
        KahveFaliSayisi:"", 
             
        }

        axios.post('/api/admin/adminekle', newAdmin)
        .then(res => console.log(res.data))

        setAdmin({
            username:  "",
            email:"",
            password: "",
            iban:  "",
            cuzdan:  "",
            falbilgisi: "",
            indirimkodu:  "",
            resimyolu:"",  
            profilyazisi:"", 
            yorumlar:  "",
            yorumsayisi: "",
            yediYirmidort:"",  
            baktigiFalid:"",
            baktigiFalAdi:"",  
            baktigiFalUcreti: "",
            kazandigiKar:"",  
            adminFalciyaYorumlari:"",  
            yaziliFalFiyat:"",  
            canlifalFiyati:"",  
            FalciRutbesi:"",
            KahveFaliSayisi:"", 
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setAdmin(oldAdmin => {
            return {
                ...oldAdmin,
                [name]: value
            }
        })
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <label>Adı Name: </label>
                <input type="text" name="name" value={Admin.name} required 
                    onChange={handleChange}/><br/>
                <label>Amount: </label>
                <input type="text" name="amount" value={Admin.amount}
                    onChange={handleChange}/><br/>
                <label>Info: </label>
                <input type="text" name="info" value={Admin.info}
                    onChange={handleChange}/><br/>
                <input type="submit" value="Add Admin!" />
            </form>
        </div>
    )
}

export default AddAdmin