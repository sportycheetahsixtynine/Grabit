/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styles from '../styles/Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles['bg-white']}>
      <h1 className={styles.heading}>Profile settings</h1>
      <div className={styles.content}>
        <div className="row">
          <div className="col-lg-6 text-center order-md-last">
            <div className={styles.avatar} />
            <div>
              <button type="button" className={`${styles.btn} ${styles['btn-dark']}`}>
                Upload
              </button>
              <button type="button" className={`${styles.btn} ${styles['btn-light']}`}>
                Remove
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <form>
              <div className="form-group-lg">
                <label htmlFor="name" className={styles.grey}>
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control mb-4 p-4"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group-lg">
                <label htmlFor="email" className={styles.grey}>
                  Email
                </label>
                <input type="email" className="form-control mb-4 p-4" id="email" />
              </div>
              <div className="form-group-lg">
                <label htmlFor="phone" className={styles.grey}>
                  Phone
                </label>
                <input type="text" className="form-control mb-4 p-4" id="phone" />
              </div>
              <button type="submit" className={styles.button}>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile