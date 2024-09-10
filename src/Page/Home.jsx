import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Form from 'react-bootstrap/Form';
import JobList from './JobList/JobList';
import SliceCompany from './SliceHome/SliceCompany';
import SliceJob from './SliceHome/SliceJob';
const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchJobs();
  }, []);

  const companies = [
    {
      rank: 'VNR500',
      logo: '../image/1.png',
      name: 'CÔNG TY CỔ PHẦN ADEMAX',
    },
    {
      rank: 'V1000',
      logo: 'https://i.imgur.com/7y6v62Z.png',
      name: 'CÔNG TY TNHH PANASONIC APPLIANCES VIỆT NAM',
    },
    {
      rank: 'PROFIT500',
      logo: 'https://i.imgur.com/0zW0y9e.png',
      name: 'CÔNG TY CỔ PHẦN ĐIỆN CƠ THỐNG NHẤT',
    },
    {
      rank: 'PROFIT500',
      logo: 'https://i.imgur.com/p8x53x4.png',
      name: 'CÔNG TY CỔ PHẦN ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN...',
    },
  ];

  const jobCategories = [
    { icon: '$', title: 'Kinh doanh / Bán hàng', count: 14631 },
    { icon: '< />', title: 'IT phần mềm', count: 3815 },
    { icon: '💼', title: 'Hành chính / Văn phòng', count: 4485 },
    { icon: '🎓', title: 'Giáo dục / Đào tạo', count: 3487 },
    { icon: '💬', title: 'Tư vấn', count: 4549 },
    { icon: '📣', title: 'Marketing / Truyền thông /...', count: 7589 },
    { icon: '🚚', title: 'Vận tải / Kho vận', count: 1391 },
    { icon: '✅', title: 'Kế toán / Kiểm toán', count: 3586 },
  ];

  const fetchJobs = async () => {
    try {
      const response = await fetch(`https://example.com/api/jobs?page=${currentPage}&filter=${filter}`); // Replace with your API endpoint
      const data = await response.json();
      setJobs(data.jobs);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchJobs();
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
    fetchJobs();
  };

  return (
    <div className="app">
      <main className="main">
        <section className="banner">
          <div className="container">
            <div className="banner-content">
              <h1>Công nghệ AI dự đoán, cá nhân hóa việc làm</h1>
              <h2>Mức lương cao dành cho bạn.</h2>
              <div className="search-bar">
              <div className='input-search'>
              <i class="fa-solid fa-magnifying-glass"></i>
              <input  placeholder="Vị trí ứng tuyển" />
              </div>
                <button className='btn'>Tìm kiếm</button>
              </div>
            </div>
          </div>
        </section>
<SliceJob/>
        {/* việc làm tốt nhất */}

        <section className="jobs">
          <div className="container">
          <Link to="/alljob"><h2 className='jtitle'>Việc làm tốt nhất</h2></Link>
            <div className="jobs-list">
              <JobList/>
            </div>
          </div>
        </section>
        
        {/* top công ty hàng đầu */}
        <section>
       <div className="container">
       <h2 className='jtitle'>Công ty nổi bật</h2>
       <SliceCompany/>
       </div>
        </section>

        {/* top ngành nghề nổi bật */}
        <section>
          <div className="container3">
            <h1 className='top'>Top ngành nghề nổi bật</h1>
            <p className='w'>Bạn muốn tìm việc mới? Xem danh sách việc làm tại đây.</p>
            <div className="job-categories">
              {jobCategories.map((category, index) => (
                <div key={index} className="job-category">
                  <div className="icon">{category.icon}</div>
                    <h3>{category.title}</h3>
                    <p>{category.count} việc làm</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>



      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 DuyCareer</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;