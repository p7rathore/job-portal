import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import CreateJobFormOne from '../components/CreateJobFormOne';
import Modal from '../common/modal';
import Button from '../components/Button';
import axios from 'axios';
import CreateJobFormTwo from '../components/CreateJobFormTwo';
import Loading from '../components/Loading';

const Home = () => {
  const apiUrl = 'https://6572bbba192318b7db40d288.mockapi.io/api/demoApp/jobs/'

  const [showModal, setShowModal] = useState(false);
  const [isStepOneDone, setIsStepOneDone] = useState(false);
  const [formOneData, setFormOneData] = useState({});
  const [cardData, setCardData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleGetJobs();
  }, [])

  const handleGetJobs = () => {
    axios.get(apiUrl)
      .then(function (response) {
        if (response.data) {
          setCardData(response.data)
          setFormOneData({});
          setShowModal(false);
          setIsStepOneDone(false);
          setSelectedJob(null);
          setIsLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleFormsSubmit = (formStep, data) => {
    switch (formStep) {
      case 'step1': {
        if (data) {
          setIsStepOneDone(true)
          setFormOneData(data);
        }
        break;
      }
      case 'step2': {
        if (data) {
          if (selectedJob) {
            handleEditJob(data);
          } else {
            handleCreateJob(data);
          }
        }
        break;
      }
      default: return
    }
  }

  const handleCreateJob = (data) => {
    setIsLoading(true);
    const finalData = { ...formOneData, ...data }
    axios.post(apiUrl, finalData)
      .then(function (response) {
        if (response) {
          handleGetJobs();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleEditJob = (data) => {
    setIsLoading(true);
    const finalData = { ...formOneData, ...data }
    axios.put(apiUrl + selectedJob.id, finalData)
      .then(function (response) {
        if (response) {
          handleGetJobs();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleDeleteJob = (id) => {
    setIsLoading(true);
    const isConfirmed = window.confirm('Are you sure you want to delete this job?');
    if (isConfirmed) {
      axios.delete(apiUrl + id)
        .then(function (response) {
          if (response) {
            handleGetJobs();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }


  return (
    <div>
      {
        isLoading ? <Loading /> : <>
          <div className='mx-1.5 my-2.5'>
            <Button btnName='Create Job' isPrimary btnClick={() => setShowModal(true)} />
          </div>
          <Card data={cardData} getSelectedJob={(jobData) => { setShowModal(true); setSelectedJob(jobData); setIsStepOneDone(false) }} handleDelete={(jobId) => handleDeleteJob(jobId)} />
          {
            showModal && (
              <Modal closeModal={() => setShowModal(false)}>
                {!isStepOneDone && <CreateJobFormOne handleSubmit={(data) => handleFormsSubmit("step1", data)} selectedJobData={selectedJob} />}
                {isStepOneDone && <CreateJobFormTwo handleSubmit={(data) => handleFormsSubmit("step2", data)} selectedJobData={selectedJob} />}
              </Modal>
            )
          }
        </>}
    </div>
  )
}

export default Home;