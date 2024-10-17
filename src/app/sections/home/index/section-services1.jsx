import { NavLink } from "react-router-dom";

function SectionServices1() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const services = [
    {
      title: "Digital Forensic Investigations",
      text: "We offer comprehensive digital forensic services, including data recovery, evidence acquisition, and expert witness testimonies. Our team works closely with LEAs and enterprises to ensure all critical data is recovered and presented in a legally defensible manner.",
      icon: "flaticon-security",
    },
    {
      title: "Vulnerability Assessment and Penetration Testing (VAPT)",
      text: "Cyber Enfortech provides in-depth vulnerability assessments and penetration testing to identify and mitigate potential security threats in your organization. Our team uses a blend of commercial and open-source tools to ensure your systems are resilient against cyber threats.",
      icon: "flaticon-coding",
    },
    {
      title: "Cyber and IT Audits",
      text: "We conduct thorough audits to evaluate your organization’s cybersecurity posture. By identifying gaps and vulnerabilities, we provide actionable insights that help you maintain compliance with industry standards and enhance overall security.",
      icon: "flaticon-smart-contracts",
    },
    {
      title: "Security Operations Center (SOC) Services",
      text: "Our SOC services offer 24/7 monitoring and incident response, ensuring that threats are detected and mitigated in real-time. With a combination of cutting-edge technologies and experienced analysts, we safeguard your organization from evolving cyber threats.",
      icon: "flaticon-security",
    },
    {
      title: "Red Teaming Services",
      text: "Through simulated attacks, our Red Team assesses your organization’s defenses from a hacker’s perspective. This allows us to uncover weaknesses and provide strategies to bolster your cybersecurity framework.",
      icon: "flaticon-coding",
    },
    {
      title: "Website Security Testing",
      text: "In the digital age, your website is your online identity. We conduct thorough security testing on websites, identifying and fixing vulnerabilities to prevent data breaches and unauthorized access.",
      icon: "flaticon-smart-contracts",
    },
  ];
  return (
    <>
      <div className="section-full p-t110 p-b80 sx-our-services-outer sx-bg-light">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Our Services</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">
                Sophisticated Knowledge For Rapidly Emerging Legal service of Our IT Solution!
              </h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-our-services-bx">
              <div className="row">
                {services.map((service, index) => (
                  <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms" key={index}>
                    <div className="sx-service-bx-1">
                      <div className="sx-icon-box-wraper">
                        <div className="sx-service-bx-icon scale-in-center">
                          <span className="sx-text-primary">
                            <i className={service.icon} />
                          </span>
                        </div>
                        <div className="icon-content">
                            <div style={{ height:"220px"}}>
                          <h4 className="sx-tilte">{service.title}</h4>
                          <p className="a-cardText">{truncateText(service.text, 150)}</p>
                            </div>
                          <div className="sx-center-btn">
                            <NavLink to="/services/detail" className="site-button-circle">
                              <i className="fa fa-long-arrow-right" />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionServices1;
