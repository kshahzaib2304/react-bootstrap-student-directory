
import { useState } from 'react';

import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {

  const [students, setStudents] = useState([
    { id: 101, name: 'Jane Doe', major: 'Computer Science', year: 2, gpa: 3.8, views: 0 },
    { id: 102, name: 'Mary Doe', major: 'Computer Science', year: 2, gpa: 3.8, views: 0 },
    { id: 103, name: 'Gant Doe', major: 'Computer Science', year: 2, gpa: 3.8, views: 0 },
    { id: 104, name: 'Amm Doe', major: 'Computer Science', year: 2, gpa: 3.8, views: 0 },
    { id: 105, name: 'John Smith', major: 'Information Technology', year: 3, gpa: 3.6, views: 0 },
    { id: 106, name: 'Sarah Khan', major: 'Software Engineering', year: 1, gpa: 3.9, views: 0 },
    { id: 107, name: 'Ali Ahmed', major: 'Computer Science', year: 4, gpa: 3.5, views: 0 },
    { id: 108, name: 'Emily Rose', major: 'Information Technology', year: 2, gpa: 3.7, views: 0 },
    { id: 109, name: 'David Lee', major: 'Software Engineering', year: 3, gpa: 3.4, views: 0 },
    { id: 110, name: 'Ayesha Noor', major: 'Computer Science', year: 1, gpa: 3.9, views: 0 },
    { id: 111, name: 'Michael Scott', major: 'Information Technology', year: 4, gpa: 3.2, views: 0 },
    { id: 112, name: 'Hassan Raza', major: 'Computer Science', year: 2, gpa: 3.6, views: 0 }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [alert, setAlert] = useState('Student records loaded successfully.');
  const [showForm, setShowForm] = useState(false);

  const [newStudent, setNewStudent] = useState({
    name: '',
    major: 'Computer Science',
    year: 1,
    gpa: 3.5
  });

  const studentsPerPage = 4;

  // Search students
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.id.toString().includes(search)
  );

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / studentsPerPage)
  );

  const startIndex = (currentPage - 1) * studentsPerPage;

  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  // Delete student
  const handleDelete = (id) => {
    setStudents(prev => prev.filter(student => student.id !== id));
    setCurrentPage(1);
    setAlert('Student record has been successfully deleted.');
  };

  // Increase profile views
  const handleViewProfile = (id) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id
          ? { ...student, views: student.views + 1 }
          : student
      )
    );

    setAlert(`Student profile ${id} has been viewed successfully.`);
  };

  // Add new student
  const handleAddStudent = (e) => {
    e.preventDefault();

    const student = {
      ...newStudent,
      id: Math.max(100, ...students.map(s => Number(s.id))) + 1,
      year: Number(newStudent.year),
      gpa: Number(newStudent.gpa),
      views: 0
    };

    setStudents(prev => [...prev, student]);

    setNewStudent({
      name: '',
      major: 'Computer Science',
      year: 1,
      gpa: 3.5
    });

    setShowForm(false);
    setSearch('');
    setCurrentPage(Math.ceil((students.length + 1) / studentsPerPage));
    setAlert('New student has been successfully added.');
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />

      <main className="container main-container">

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb custom-breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Students</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Directory
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="page-header d-flex justify-content-between align-items-center flex-wrap gap-3">
          <h2>Page Header</h2>

          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : 'Add New Student'}
          </button>
        </div>

        {/* Add Student Form */}
        {showForm && (
          <div className="card p-4 mb-4 shadow-sm">
            <h5 className="mb-3">Add New Student</h5>

            <form onSubmit={handleAddStudent}>
              <div className="row g-3">

                <div className="col-md-6">
                  <label className="form-label">Student Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter student name"
                    value={newStudent.name}
                    onChange={e =>
                      setNewStudent({
                        ...newStudent,
                        name: e.target.value
                      })
                    }
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Major</label>
                  <select
                    className="form-select"
                    value={newStudent.major}
                    onChange={e =>
                      setNewStudent({
                        ...newStudent,
                        major: e.target.value
                      })
                    }
                  >
                    <option>Computer Science</option>
                    <option>Information Technology</option>
                    <option>Software Engineering</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Year</label>
                  <select
                    className="form-select"
                    value={newStudent.year}
                    onChange={e =>
                      setNewStudent({
                        ...newStudent,
                        year: e.target.value
                      })
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">GPA</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    max="4"
                    step="0.1"
                    value={newStudent.gpa}
                    onChange={e =>
                      setNewStudent({
                        ...newStudent,
                        gpa: e.target.value
                      })
                    }
                    required
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-success">
                    Save Student
                  </button>
                </div>

              </div>
            </form>
          </div>
        )}

        {/* Search */}
        <div className="d-flex justify-content-end mb-3">
          <div className="input-group search-box">
            <input
              type="text"
              className="form-control"
              placeholder="Search students..."
              value={search}
              onChange={handleSearch}
            />
            <button className="btn btn-primary">
              <i className="bi bi-search"></i> Search
            </button>
          </div>
        </div>

        {/* Student Cards */}
        <div className="row student-grid">

          {currentStudents.length > 0 ? (
            currentStudents.map(student => (
              <StudentCard
                key={student.id}
                student={student}
                onDelete={handleDelete}
                onViewProfile={handleViewProfile}
              />
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h5>No students found.</h5>
              <p className="text-muted">Try another search.</p>
            </div>
          )}

        </div>

        {/* Pagination */}
        {filteredStudents.length > studentsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* Alert */}
        {alert && (
          <div className="alert alert-info alert-dismissible fade show mt-3"
               role="alert">
            {alert}

            <button
              type="button"
              className="btn-close"
              onClick={() => setAlert('')}
              aria-label="Close"
            ></button>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}

export default App;
