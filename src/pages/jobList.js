import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setJob } from '../redux/jobSlice';
import FilterComponent from '../component/filter';


const BaseURL = "http://localhost:3030/jobs"

const JobList = () => {
// store abone olacağım useselector ile
const selector = useSelector((state)=>state.jobReducer)
// console.log(selector,"selector")

// burada ise useDispact fonksiyonunu kullanıp verileri reducere göndermek
const dispatch = useDispatch();


  // burada verinin sayfa açıldığında ekrana basma işlemini yapacağız bunun için useEffect ile yapacağız.

  useEffect(() => {
    axios
      .get('http://localhost:3030/jobs')
      .then((res) => dispatch(setJob(res.data)));
  }, []);


  return (
    <>
     <FilterComponent/>
    <h2 style={{marginLeft:50}}>{selector.filteredJobs.length}   İş Bulundu</h2>
    <section className='list-section'>
      {/*  veriler çekilmişse ekrana bas */}
      {!selector.initialized ? (
        <p>loading</p>
      ):(selector.filteredJobs.map((job,index)=>
        <div className="job-card" key={job.id}>
        {/* kartın üst kısmı */}
        <div className="head">
          <div className="letter">
            <p>{job.company[0]}</p>
          </div>
          <div className="info">
            <p>{job.position}</p>
            <p>{job.company}</p>
          </div>
        </div>
        {/* kartın alt kısmı*/}
        <div className="body">
          <div className="field">
            <img src="/images/map.png" />
            <p>{job.location}</p>
          </div>

          <div className="field">
            <img src="/images/calendar.png" />
            <p>{job.date}</p>
          </div>

          <div className="field">
            <img src="/images/bag.png" />
            <p>{job.type}</p>
          </div>

          <div className="status">
            <p className={job.status}>{job.status}</p>
          </div>
        </div>
      </div>
      ))}
    </section>
    </>
  )
}

export default JobList