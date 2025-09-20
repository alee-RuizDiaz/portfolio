import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../../data/works.json';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import './pagination.css';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  const itemsPerPage = 6;

  const categories = ['Todos', ...new Set(data.map(item => item.categoria))];

  const filteredData = selectedCategory === 'Todos'
    ? data
    : data.filter(item => item.categoria === selectedCategory);
    
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page when category changes
  };
  
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(filteredData.slice(startIndex, endIndex));
  }, [filteredData, currentPage]);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="sec-box portfolio main-bg pt-50 pb-50 radius-15">
      <div className="header-bar">
        <Link to="/" className="back-button">
          <ArrowLeft className='back-arrow' />
          <span>Volver</span>
        </Link>
      </div>
      <div className="sec-head mb-30 text-center">
        <h6 className="sub-title opacity-7 mb-15">Portfolio</h6>
        <h3>
          Proyectos <span className="main-color">Realizados</span>
        </h3>
      </div>
      <div className="filter-menu-wrapper">
        <select className="filter-select" onChange={handleCategoryChange} value={selectedCategory}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="filter-menu text-center mb-30">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${category === selectedCategory ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="gallery">
        <div className="row">
          {paginatedData.map((item, index) => (
            <div key={index} className="col-lg-6 items">
              <div className="item mt-50">
                <div className="img">
                  <Link to={`/proyecto/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
                    <img src={item.photo} alt={item.title} />
                  </Link>
                </div>
                <div className="cont mt-30 d-flex align-items-center">
                  <div>
                    <span className="tag">{item.categoria}</span>
                    <h6 className="line-height-1">
                      <Link to={`/proyecto/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>{item.title}</Link>
                    </h6>
                  </div>
                  <div className="ml-auto">
                    <div className="arrow">
                      <Link to={`/proyecto/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
                        <svg
                          className="arrow-right"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 34.2 32.3"
                          xmlSpace="preserve"
                          style={{ strokeWidth: 2 }}
                        >
                          <line x1="0" y1="16" x2="33" y2="16"></line>
                          <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                          <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {totalPages > 1 && (
        <div className="pagination-container mt-50 text-center">
          <button 
            className="pagination-button" 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            <ChevronLeft size={20} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <button
              key={pageNumber}
              className={`pagination-number ${pageNumber === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          
          <button 
            className="pagination-button" 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Portfolio;







