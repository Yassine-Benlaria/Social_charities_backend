import React  from "react";
import Helmet from "react-helmet";
import { WEBSITE_NAME } from "../../../utils/Data";
import useStyles from './Offers-jss';
import DonationIcon from '../../../images/donation-icon.svg';
import Solidarity from '../../../images/solidarity.svg';
import BloodIcon from '../../../images/blood-icon.svg';
import Other from '../../../images/other.svg';
import { Link } from "react-router-dom";


const Offers = () => {

  const classes = useStyles();

  return(
      <div>
        <Helmet>
        <title>{`${WEBSITE_NAME} | Offers`}</title>
        </Helmet>
        <div className={`${classes.root} card-shadow text-center`}>
        <div className='row'>
            <div className='col-12 col-lg-6 text-center text-lg-left'>
              <h3 className='title mb-5 mx-auto mx-lg-0 '>
                What does <span className='bold'>Social Charities</span> provide ?
              </h3>
            </div>
          </div>
        
            <div className='row text-center text-lg-left'>
                  <div className=' col-12 col-lg-3'>
                    <div >
                      <img
                        className='img img-fluid mb-3'
                        src={DonationIcon}
                        alt='Home'
                      />
                      <h5 className='title mb-2 mt-2 mx-auto mx-lg-0'>Social aid</h5>
                      <p className='description mb-5 mx-auto mx-lg-0'>
                        gifts and grants for workers on the occasions of marriage,
                         new born, circumcision, and others </p>

                    </div>
                    <Link  to='/offers/soc'>
                         <button className='button-primary '> View Offers </button>
                    </Link>
                  </div>

                <div className=' col-12 col-lg-3'>
                  <div>
                  <img
                      className='img img-fluid mb-3'
                      src={BloodIcon}
                      alt='Home'
                    />
                    
                    <h5 className='title mb-2 mt-2 mx-auto mx-lg-0'>
                       Health services
                    </h5>
                    <p className='description mb-5 mx-auto mx-lg-0'>
                       Help employees patients or relatives  in their chirurgical operations 
                       or medical treatment and others</p>
                  </div>
                    <Link  to='/offers/hea'>
                         <button className='button-primary '> View Offers </button>
                    </Link>
                </div>

            <div className='col-12 col-lg-3'>
              <div>
                <img
                  className='img img-fluid mb-3'
                  src={Solidarity}
                  alt='Home'
                />
                
                <h5 className='title mb-2 mt-2 mx-auto mx-lg-0'>Solidarity </h5>
                <p className='description mb-5 mx-auto mx-lg-0'>
                 Give financial aids to those in need of money, tools or resources ,
                 specially those in difficult health and financial conditions
                </p>
              </div>
              <Link  to='/offers/sol'>
                  <button className='button-primary '> View Offers </button>
              </Link>
            </div>

            <div className='col-12 col-lg-3'>
              <div>
                <img
                  className='img img-fluid mb-3'
                  src={Other}
                  alt='Home'
                />
                <h5 className='title mb-2 mt-2 mx-auto mx-lg-0'> Other services</h5>
                <p className='description mb-5 mx-auto mx-lg-0'>
                    exceptional loans for school staff, 
                    organize cultural and sports activities and other related activities</p>
              </div>
                <Link  to='/offers/oth'>
                   <button className='button-primary '> View Offers </button>
                </Link>
            </div>

          </div>

            
        </div>

      </div>
  )
}

export default Offers ;