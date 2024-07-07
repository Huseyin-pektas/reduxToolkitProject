import axios from 'axios';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddJob = () => {
  const navigate = useNavigate()

  //  bütün inputları kontrol edeceğim bir state kullanacğım

  const [formState, setFormState] = useState({
    id: Number(new Date().getTime()),
    position: "",
    location: "",
    company: "",
    status: "",
    type: "",
    date: new Date().toLocaleDateString().replaceAll(".", "/")
  })
  //  burada ekle butununa basınca aşağıda  oluşturduğmuz handle
  // fonsksiyonunu çağırıyoruz
  const handleSubmit = () => {

    if (!formState.position || !formState.company || !formState.location) {
      // burada daha güzel alert için toast kütüp. kullandım 
      toast.error('🦄 Form alanlarını doldurun!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return
    } else {
      // console.log(formState)
      toast.success("form başarıyla dolduruldu")
    }

    //  burada apiye yeni oluşturduğum form göndermem  lazım
    // veri göderme işi
    axios.post("http://localhost:3030/jobs", formState)

      .then((res) => {
        // kullanıcıyı bilgilendir
        toast.success('İş başarıyla eklendi');
        // kullanıcıyı ana sayfaya yönlendirir
        navigate('/');
      })
      // .then((res) => {
      //   toast.success("form başarıyla gönderildi");
      //   navigate("/")
      // })
      .catch((err) => { toast.error("form göderilirken bir hata oluştu") })
  }


  return (

    <section className="add-sec">
      <h2>Yeni İş Ekle</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Pozisyon</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, position: e.target.value })
            }
          />
        </div>

        <div className="input-field">
          <label>Şirket</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, company: e.target.value })
            }
          />
        </div>

        <div className="input-field">
          <label>Lokasyon</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, location: e.target.value })
            }
          />
        </div>

        <div className="input-field">
          <label>Durum</label>
          <select
            onChange={(e) =>
              setFormState({ ...formState, status: e.target.value })
            }
          >
            <option value="Mülakat">Mülakat</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Reddedildi">Reddedildi</option>
          </select>
        </div>

        <div className="input-field">
          <label>Tür</label>
          <select
            onChange={(e) =>
              setFormState({ ...formState, type: e.target.value })
            }
          >
            <option value="Tam Zaman">Tam Zaman</option>
            <option value="Yarı Zaman">Yarı Zaman</option>
            <option value="Uzaktan">Uzaktan</option>
            <option value="Staj">Staj</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
        >Ekle</button>
      </div>
    </section>
  )
}

export default AddJob
