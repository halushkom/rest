import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import { useHttp } from '../../hooks/http.hook';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialValue = {
    email: "",
    name: "",
    phoneNumber: "",
    people: '',
    date: '',
    time: '',
}
export const Reservation = () => {
    const {loading, error, request} = useHttp()
    const [startDate, setStartDate] = useState(new Date());
    const [form, setForm] = useState(initialValue)

    const changeEventHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value})
    }
    const sentData = async () =>{
        try{
            const data = await request('api/reservation', 'POST', {...form})
        } catch (e) {

        }}
    return(
        <section className="section section_reservation">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section__heading text-center">
                            Online резервування
                        </h2>
                        <p className="section__subheading text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo praesentium sequi in
                            cum, beatae maiores quae qui.
                        </p>

                    </div>
                </div>
                <div className="row justify-content-lg-center  section_reservation__row">
                    <div className="col-lg-8">
                        <form className="section_reservation__form" id="reservation__form">
                            <div className="row">
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="reservation__form__name">Full name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Full name"
                                            onChange={changeEventHandler}
                                        />
                                            <div className="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="reservation__form__phone">Phone
                                            number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone number"
                                            onChange={changeEventHandler}
                                        />
                                            <div className="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="reservation__form__email">E-mail
                                            address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="E-mail address"
                                            onChange={changeEventHandler}
                                        />
                                            <div className="invalid-feedback"></div>
                                    </div>

                                </div>
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="reservation__form__people">People</label>
                                        <select
                                            className="form-control"
                                            id="people"
                                            name="people"
                                            onChange={changeEventHandler}>
                                            <option value="1">1 person</option>
                                            <option value="2" selected="">2 persons</option>
                                            <option value="3">3 persons</option>
                                            <option value="4">4 persons</option>
                                            <option value="5">5 persons</option>
                                        </select>
                                        <div className="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="reservation__form__date">Date</label>
                                        <DatePicker
                                            closeOnScroll={e => e.target === document}
                                            selected ={startDate}
                                            className="form-control"
                                            id="date"
                                            name="date"
                                            isClearable
                                            onChange={date => setStartDate(date)}/>
                                            <div className="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="reservation__form__time">Time</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="time"
                                            name="time"
                                            value="18:00"
                                            onChange={changeEventHandler}/>
                                            <div className="invalid-feedback"></div>
                                    </div>

                                </div>
                                <div className="col">

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={sentData}
                                            disabled={loading} //блокування кнопки
                                        >
                                            Зарезервувати
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}