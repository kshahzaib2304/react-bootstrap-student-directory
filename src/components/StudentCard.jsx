
import { useState } from 'react';

function StudentCard({ student, onDelete, onViewProfile }) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="col-12 col-sm-6 col-lg-3 mb-4">
      <div className="card student-card h-100 shadow-sm">

        <div className="student-avatar">
          <i className="bi bi-person-fill"></i>
        </div>

        <div className="card-body">
          <h5 className="card-title mb-1">
            {student.name}
          </h5>

          <p className="student-info mb-1">
            ID: {student.id}
          </p>

          {showDetails && (
            <div className="student-info">
              <p className="mb-1">
                Major: {student.major}
              </p>
              <p className="mb-1">
                Year: {student.year}
              </p>
              <p className="mb-1">
                GPA: {student.gpa}
              </p>
            </div>
          )}

          <p className="text-muted small mt-2 mb-2">
            Profile Views: {student.views}
          </p>

          <div className="d-flex flex-wrap gap-2">
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => onViewProfile(student.id)}
            >
              View Profile
            </button>

            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => onDelete(student.id)}
            >
              Delete
            </button>
          </div>

          <button
            className="btn btn-sm btn-outline-secondary mt-2"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>

        </div>
      </div>
    </div>
  );
}

export default StudentCard;
