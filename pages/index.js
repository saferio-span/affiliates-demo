import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import YouTube from "react-youtube";

export default function Home() {

  const opts = {
    height: "390",
    width: "630",
    playerVars: {
      autoplay: 1,
    },
  };

  ()=>{
    window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'UA-104112651-26');
  }
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
        IRS Form 1099 NEC for the 2021 Tax Year
      </title>
      <meta name="description"
            content={`IRS 1099 NEC Form is used to report Nonemployee Compensation. We support 1099 NEC Federal & State Filings for 2021 Tax Year`}/>
      <meta name="keywords" content="1099 NEC, 1099 NEC 2021, what is 1099 NEC, 1099 NEC Form 2021, Form 1099 NEC, IRS 1099 NEC, NEC1099, what is a 1099 NEC form, 1099 NEC form, nonemployee compensation, 1099 NEC IRS" />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        {/* Bootstrap CSS  */}

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap"
              rel="stylesheet"/>
        <link href="/images/fav.png" rel="icon"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css"/>

        {/* Bootstrap CSS  */}

      </Head>
      <body>
        <header id="header" className="fixed-top ">
          <div className="container align-items-right">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="index.html"><Image src="/images/logo.png" alt="w9request" className="img-fluid" width={183} height={65} /></a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                    <li key="Home"><a className="nav-link scrollto dropdown-item" href="#banner">Home</a></li>
                        <li key="Form_1099_NEC"><a className="nav-link scrollto dropdown-item" href="#form1099Nec">Form 1099 NEC</a></li>
                        <li key="Changes_for_2021"><a className="nav-link scrollto dropdown-item" href="#changes">Changes for 2021</a></li>
                        <li key="Deadlines"><a className="nav-link scrollto dropdown-item" href="#deadlines">Deadlines</a></li>
                        <li key="Steps_to_File"><a className="nav-link scrollto dropdown-item" href="#steps">Steps to File</a></li>
                        <li key="State_Filing"><a className="nav-link scrollto dropdown-item" href="#states">State Filing</a></li>
                        <li key="contact_us"><a className="nav-link scrollto dropdown-item" href="#contact">Contact Us</a></li>
                        {/* <li key="tbs_link" className="ms-0 ms-md-3 mt-2 mt-md-0 dropdown-item"><a href="https://secure.taxbandits.com/User/Register/?ref=w9request" target="_blank" rel="noopener noreferrer" className="btn-primary ">Request 1099 NEC Now</a></li> */}
                    </ul>
                    <div className="d-flex justify-content-center">
                        <a href="https://secure.taxbandits.com/User/Register/?ref=w9request" target="_blank" rel="noopener noreferrer" className="btn-primary ">Request 1099 NEC Now</a>
                    </div>
                </div>
            </nav>
          </div>
        </header>
        <main id="main">
            <article>
                <section id="banner" className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h1 className="mb-3 text-center"><span className="text-blue">IRS Form 1099 NEC for 2021 Tax Year</span></h1>
                                <hr className="line mt-1 d-block mx-auto" />
                                <p className="text-center">
                                File Form 1099-NEC to Report Nonemployee Compensation
                                </p>
                                <div className="text-center mt-3 m-auto">
                                    <a href="https://secure.taxbandits.com/User/Register/?ref=nec1099form" target="_blank" rel="noopener noreferrer" className="btn-secondary">E-file 1099-NEC Now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="form1099Nec" className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2 className="mb-3 text-center"><span className="text-blue">What is Form 1099 NEC?</span></h2>
                                <hr className="line mt-1 d-block mx-auto" />
                                <p className="text-center">
                                <a href="https://www.taxbandits.com/1099-forms/what-is-form-1099-nec/">Form 1099-NEC</a> is an IRS tax form used to report nonemployee compensation. <b>Payers should use this form if they have paid $600 or more to a vendor, independent contractor, or freelance worker during the tax year</b>. In addition to <a href="https://www.taxbandits.com/1099-forms/efile-form-1099-nec-online/">filing Form 1099-NEC</a> with the IRS, payers must also furnish a copy to their recipients. 
                                </p>
                                <br />
                                <p className=""><a href="https://www.taxbandits.com/1099-forms/what-is-form-1099-nec/">Click here</a> to know more about the <a href="https://www.taxbandits.com/1099-forms/what-is-form-1099-nec/">1099 NEC Form</a></p>
                                <div className="text-center mt-3 m-auto">
                                    <a href="https://secure.taxbandits.com/User/Register/?ref=nec1099form" target="_blank" rel="noopener noreferrer" className="btn-secondary">E-file 1099-NEC Now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="changes" className="d-flex align-items-center">
                    <div className="container">
                        <div className="row  d-flex align-items-center">
                            <div className="col-lg-7 col-xl-7 col-md-7 text-center text-md-start">
                                <h2 className="text-center text-center text-md-start">
                                    What are IRS <span className="orangeText">Form 1099 NEC</span> changes for the 2021 Tax Year?
                                </h2>
                                <p className="fs-5 sm-fs-15px mt-1">
                                  There are some recent updates from the IRS for the 2021 tax year. The IRS has updated a few changes in the Form 1099 NEC
                                </p>
                                <p className="fs-5 sm-fs-15px mt-1">
                                    <i>The following are the changes made by the IRS to the 1099-NEC Form:</i>
                                </p>
                                <p className="fs-5 sm-fs-15px mt-1">
                                    <b>Box 1:</b> It will not be used for reporting cash payments for the purchase of fish for resale purposes under section 6050R.
                                </p>
                                <p className="fs-5 sm-fs-15px mt-1">
                                    <b>Box 2:</b>  New box updated to report any sales of $5,000 or more of consumer products for resale, on buy-sell, deposit-commission, or any other basis.
                                </p>
                                <p className="fs-5 sm-fs-15px mt-1">
                                    <b>FATCA Filing Requirements:</b> The IRS has removed the Check box for FATCA Filing Requirement from the <a className="text-dark" href="https://www.taxbandits.com/1099-forms/what-is-form-1099-nec/">1099 NEC Form.</a> 
                                </p>
                                <p className="fs-5 sm-fs-15px mt-1">
                                    <b>Form Size Changes:</b> The IRS has reduced the height of the form so that it can accommodate 3 forms on a single page.
                                </p>
                                <p className="fs-5 sm-fs-15px mt-1">
                                    <b>Changes in Electronic filing Requirements:</b> The Taxpayer First Act of 2019, enacted July 1, 2019, authorized the Department of the Treasury and the IRS to issue regulations that reduce the 250-return requirement for 2021 tax year to 100 returns, which is yet to be finalized by the IRS.
                                </p>
                                <p className="fs-5 sm-fs-15px mt-3">
                                    <a className="text-dark" href="https://www.taxbandits.com/1099-forms/form-1099-nec-changes-for-2021/">Know more</a> about the <a className="text-dark" href="https://www.taxbandits.com/1099-forms/form-1099-nec-changes-for-2021/">Form 1099-NEC changes</a> for the 2021 tax year in detail
                                </p>
                                <h3><b>CTA:</b> <a href="https://www.taxbandits.com/1099-forms/form-1099-nec-changes-for-2021/" className="text-dark">E-file 1099-NEC Now</a></h3>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 text-center d-none d-sm-block ">
                              <YouTube videoId="HT9iD2WdgdQ" opts={opts} />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="deadlines" className="py-5">
                    <div className="container">
                        <h2 className="mb-3 text-center">
                          What is the Deadline for the  <span className="text-blue">
                            1099 NEC Form?
                            </span>
                        </h2>
                        <hr className="line mt-1 d-block mx-auto" />

                        <div className="row mt-4">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 card-group">
                                <div className="card p-2 shadow bg-dull-blue">
                                    <div className=" p-3 m-auto mt-0 mb-0 ">
                                        <Image src="/images/access.png" width={50} height={50} alt="Online Access" />

                                    </div>

                                    <div className="card-block">
                                        <h4 className="card-title text-center mt-1 text-dark fs-5 ">Recipient copy </h4>
                                        <p className="text-center"><b>January 31, 2022</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 card-group">
                                <div className="card p-2 shadow bg-dull-blue">

                                    <div className="p-3 m-auto mt-0 mb-0">
                                      <Image src="/images/efile.png" width={50} height={50} alt="Automate 1099 filing" />
                                    </div>

                                    <div className="card-block">
                                        <h4 className="card-title text-center mt-1 text-dark fs-5 ">E-filing </h4>
                                        <p className="text-center"><b>January 31, 2022</b></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 card-group">
                                <div className="card p-2 shadow bg-dull-blue">
                                    <div className="p-3 m-auto mt-0">
                                        <Image src="/images/esign.png" width={50} height={50} alt="E-sign W9" />
                                    </div>
                                    <div className="card-block">
                                        <h4 className="card-title text-center mt-1 text-dark fs-5 ">Paper filing</h4>
                                        <p className="text-center"><b>January 31, 2022</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <p>If the <a href="https://www.taxbandits.com/1099-forms/form-1099-nec-due-date/">1099-NEC deadline</a> falls on any Federal holidays or weekends, the next business day will be the due date.</p>
                        <div className="card">
                          <div className="card-body bg-warning">
                            <b>Note:</b>  IRS Recommends to <a href="https://www.taxbandits.com/1099-forms/efile-form-1099-nec-online/" className="text-dark">file Form 1099 NEC electronically</a> for quick processing and instant approval.
                          </div>
                        </div>
                        <br />
                        <p>Ready to file Form 1099-NEC? <a href="https://secure.taxbandits.com/User/Register/?ref=nec1099form">Get started with TaxBandits</a> and E-file your Form 1099-NEC in a few minutes.</p>
                        <h3><b>CTA: </b><a href="https://www.taxbandits.com/1099-forms/form-1099-nec-changes-for-2021/">E-file 1099-NEC Now</a></h3>
                    </div>
                </section>
                <section id="" className="py-5 bg-img-1">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 text-center d-none d-sm-block">
                                <Image src="/images/Form-1099NEC.jpg" width={520} height={293} alt="w9request - easy to request software"
                                    className="img-responsive img-fluid img-border rounded" loading="lazy" />
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 text-center text-md-start">
                                <h2 className="mb-3 text-center text-md-start">
                                  What are the filing requirements for 
                                    <span className="text-dark">
                                      Form 1099 NEC?
                                    </span>
                                </h2>
                                <hr className="line-white mt-1 mx-auto ms-md-0" />
                                <p className="text-center text-md-start">E-filing is by far the best option when it comes time to <a href="https://www.taxbandits.com/request-form-w9-online/"><b>file Forms 1099-NEC</b></a> with the IRS. Filing electronically is more accurate, efficient, and cost-effective. </p>
                                <hr className="line-white mt-1 mx-auto ms-md-0" />
                                <ol className="pl-5" type="1">
                                  <li key="1"><p><b>Payer Details:</b> Name, TIN, and Address</p></li>
                                  <li key="2"><p><b>Recipient Details:</b>  Name, TIN, and Address</p></li>
                                  <li key="3"><p>Nonemployee compensation</p></li>
                                  <li key="4"><p><b>Federal Details:</b> Miscellaneous Incomes and Federal Tax Withheld</p></li>
                                  <li key="5"><p><b>State Filing Details:</b>State Income, Payer State Number, and State Tax Withheld</p></li>
                                </ol> 
                                <p><i>Want to know how to complete Form 1099-NEC? Check out this step by step <a href="https://www.taxbandits.com/1099-forms/form-1099-nec-instructions/"><b>1099-NEC instruction </b></a></i></p>
                                <h3><b>CTA: </b><a href="https://www.taxbandits.com/1099-forms/form-1099-nec-changes-for-2021/">E-file 1099-NEC Now</a></h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="steps" className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <h2 className="mb-3 text-center"><span className="text-blue">How to File 1099 NEC Form Electronically</span></h2>
                                <hr className="line mt-1 d-block mx-auto" />
                                <p className="text-left">
                                  With TaxBandits, you can expect an e-filing process that is simple, secure, and designed for accuracy. To begin filing just follow these simple steps Once you review and transmit your form, our team will continue to update you on it’s status with the IRS. 
                                </p>
                                <br />
                                <ol className="pl-5" type="1">
                                  <li key="1_step"><p>Sign up and Select Form 1099-NEC from the dashboard.</p></li>
                                  <li key="2_step"><p>Enter the required Form 1099-NEC details.</p></li>
                                  <li key="3_step"><p>Review Form information</p></li>
                                  <li key="4_step"><p>Transmit Form 1099 NEC to the IRS/State.</p></li>
                                </ol> 
                                <p className="">Don{`'`}t wait till the <a href="https://www.taxbandits.com/1099-forms/form-1099-nec-due-date/">1099 NEC due date</a> Get started with TaxBandits today and <a href="https://www.taxbandits.com/1099-forms/efile-form-1099-nec-online/">E-file 1099 NEC</a>in minutes.</p>
                                <h3><b>CTA: </b><a href="https://www.taxbandits.com/1099-forms/form-1099-nec-changes-for-2021/">E-file 1099-NEC Now</a></h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="penalties" className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <h2 className="mb-3 text-center"><span className="text-dark">What are the penalties for 1099 NEC Forms?</span></h2>
                                <hr className="line mt-1 d-block mx-auto" />
                                <p className="text-left">
                                    It is crucial that you <a href="https://www.taxbandits.com/1099-forms/form-1099-nec-changes-for-2021/">file 1099-NEC</a> with the IRS on or before the deadline. If you fail to do so, you are subject to late filing penalties, depending on how late you file it. These penalties are given below:
                                </p>
                                <br />
                                <p className=""><b>Filing 1099-NEC after the deadline, Not more than 30 days late</b> $50/per return.</p><br/>
                                <p className=""><b>Filing between 31 days late and August 1</b> - $120/per return.</p>
                                <p className=""><b>Filing after August 1 or not filing at all</b> - $280/per return.</p><br/>
                                <p className=""><b>Not filing the return intentionally -</b>- $550/per return.</p>
                                <p className=""><a href="https://www.taxbandits.com/form-1099-series/1099-penalties/">Learn More</a> about 1099 NEC Penalties</p>
                                <h3><b>CTA: </b><a href="https://www.taxbandits.com/1099-forms/form-1099-nec-changes-for-2021/">E-file 1099-NEC Now</a></h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="states" className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2 className="mb-3 text-center"><span className="text-blue">States that require 1099-NEC filing for 2021</span></h2>
                                <hr className="line mt-1 d-block mx-auto" />
                                <p>
                                  If your state has mandated the <a href="https://www.taxbandits.com/1099-forms/">filing of Form 1099</a>, you must file it on or before the state filing deadline. <a href="https://www.taxbandits.com/form-1099-series/1099-penalties/">Failing to file 1099-NEC</a> with the state may result in penalties.
                                </p>
                                <p>For the states, Alaska, Florida, Illinois, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming are not required to file form 1099.</p>
                                <p>
                                  Check out your <a href="https://www.taxbandits.com/state-filing-requirements/">Form 1099 NEC state filing requirements.</a>
                                </p>
                                <br />
                                <h3><b>CTA: </b><a href="https://www.taxbandits.com/1099-forms/form-1099-nec-changes-for-2021/">E-file 1099-NEC Now</a></h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 bg-pink" id="contact">
                    <div className="container">
                        <h2 className="mb-2 text-center">Contact Us</h2>
                        <hr className="line mt-1 d-block mx-auto" />
                        <p className="text-center">
                          For any questions about e-filing your <a href="https://www.taxbandits.com/1099-forms/">Form 1099</a>, you can contact our support team by phone or email. Our team is here to assist you!
                        </p>

                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-2"></div>
                            <div className=" col-xl-4 col-lg-4 col-md-4 text-center border-right">
                                <p className="mt-2">
                                    <a href="tel:(704) 684-4751" className="text-decoration-none">
                                        <i className="fa fa-phone d-block fs-1 mb-2" aria-hidden="true"></i>
                                        <b>(704) 684-4751</b>
                                    </a>
                                </p>
                            </div>
                            <div className=" col-xl-4 col-lg-4 col-md-4  text-center">
                                <p className="mt-2 mb-0">
                                    <a href="mailto:support@TaxBandits.com" className="text-decoration-none">
                                        <i className="fa fa-envelope d-block fs-1 mb-2" aria-hidden="true"></i>

                                        <b>support@TaxBandits.com</b>
                                    </a>
                                </p>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2"></div>
                        </div>
                    </div>
                </section>
                <footer id="footer" className="text-white bg-dark py-2">
                    <div className="copyright">
                        <div className="container">
                            <div className="row ">
                                <div className="col">
                                    <p className="text-muted list_style_footer text-center mb-0 p-1">
                                        <a className="internal_link1" href="index.html">nec1099form.com</a> is proudly owned
                                        and managed by <a className="internal_link1" href="http://www.spanenterprises.com/"
                                                          target="blank">SPAN Enterprises LLC</a>, 2685 Celanese Road, Suite 100, Rock
                                        Hill, SC 29732. <br className="hidden-xs hidden-md hidden-s" />
                                        Copyrights © 2021 <a className="internal_link1" href="index.html">nec1099form.com</a>
                                        All rights reserved.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </article>
        </main>

        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
              className="bi bi-arrow-up-short"></i></a>

        <>
            <Script  async src="https://www.googletagmanager.com/gtag/js?id=UA-104112651-24"></Script>

            {/* Global site tag (gtag.js) - Google Analytics */}
            <Script  async src="https://www.googletagmanager.com/gtag/js?id=UA-104112651-26"></Script>
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></Script>
            <Script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></Script>
            <Script src="https://www.941reporting.com/js/jquery.exitintent.js"></Script>
            {/* <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"
              integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ=="
              crossOrigin="anonymous"></Script> */}
            <Script src="js/jquery.exitintent.js"></Script>
            <Script src="js/jquery.min.js"></Script>
            {/* <Script src="../bs/js/bootstrap.bundle.min.js"></Script> */}
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
            <Script src="../js/main.js"></Script>
            <Script src="../js/common.js"></Script>
        </>
      </body>  
    </>
  )
}
