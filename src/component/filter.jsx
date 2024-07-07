import React from 'react'
import { useDispatch } from 'react-redux'
import {
    handleInputChange,
    handleStatusChange,
    handleSortChange,
    handleReset
} from "../redux/jobSlice"
import { toast } from 'react-toastify'

const FilterComponent = () => {
    const dispacth = useDispatch()

    const onSearchChange = (e) => {
        dispacth(handleInputChange(e.target.value))
    }
    const onStatusChange = (e) => {
        dispacth(handleStatusChange(e.target.value))
    }
    const onSortChange = (e) => {
        dispacth(handleSortChange(e.target.value))
    }
    const onResetButtonClick = () => {
        dispacth(handleReset())
        toast.info("form başarıyla temizlendi")
    }


    return (
        <section className="add-sec filter-sec">
            <h2>Arama Formu</h2>
            <div className="inputs">
                <div className="input-field">
                    <label>Şirket İsmi:</label>
                    <input type="text"
                        onChange={onSearchChange}
                    />
                </div>

                <div className="input-field">
                    <label>Durum:</label>
                    <select
                        onChange={onStatusChange}
                    >
                        <option hidden>Hepsi</option>
                        <option value="Mülakat">Mülakat</option>
                        <option value="Reddedildi">Reddedildi</option>
                        <option value="Devam Ediyor">Devam Ediyor</option>
                    </select>
                </div>

                <div className="input-field">
                    <label>Sırala:</label>
                    <select
                        onChange={onSortChange}
                    >
                        <option value="Önce-Yeni">En Yeni</option>
                        <option value="Önce-Eski">En Eski</option>
                        <option value="a-z">a-z</option>
                        <option value="z-a">z-a</option>
                    </select>
                </div>
                <button
                    onClick={onResetButtonClick}
                >Filtreleri Temizle</button>
            </div>
        </section>
    )
}

export default FilterComponent
