import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../JobList/JobList.css"
import { Link } from "react-router-dom";
const JobList = (props) => {
    const currentPage2 = props.currentPage2;
    const [listJob, setListJob] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        console.log(7)
        const fetchData = async () => {
            let result = null;
            if (currentPage2 != null) {
                result = await axios.get("http://localhost:8080/joblist?currentPage=" + currentPage2);
            } else {
                result = await axios.get("http://localhost:8080/joblist");
            }
            setListJob(result.data.job);
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            <div>
                <div className="list-group">
                    {
                        listJob.map((value, i) => {
                            return (
                                <div className="container-list" key={i}>
                                    <Link to={`/jobdetails/${value._id}`} key={value.id}>
                                        <div className="list-job">
                                            <div className="title-job">
                                                <img src={value.companyImg} alt="" />
                                                <div>
                                                    <h4>{value.job}</h4>
                                                    <h5>{value.companyName}</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Mức lương: {value.earning}</p>
                                                <p>Hạn ứng tuyển: {value.date}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default JobList;