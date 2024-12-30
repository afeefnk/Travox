import React, { useState } from "react";
import "./adduser.css";

const AddUser = () => {
  const [bankQrFileName, setBankQrFileName] = useState("");
  const [companyLogoFileName, setCompanyLogoFileName] = useState("");

  const handleFileChange = (event, setFileName) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(""); // Reset if no file is selected
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="adduserformcontainer">
      <form className="adduserform">
        <h2 className="adduserhead">Add User</h2>

        <div className="dividerbottom"></div>
        <div className="form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8">
            <div>
              <label className="adduserlabel">
                Company Name in Full <span className="text-[#F5640D]">*</span>
              </label>
              <input
                type="text"
                className="inputboxes"
                placeholder="Your answer"
              />
            </div>

            <div>
              <label className="adduserlabel">
                Company name in Arabic ( For Middle east clients)
              </label>
              <input
                type="text"
                className="inputboxes"
                placeholder="Your answer"
              />
            </div>

            <div
              className={`select-wrapper ${isOpen ? "open" : ""}`}
              onClick={toggleDropdown}
            >
              <label className="adduserlabel">
                Company Location <span className="text-[#F5640D]">*</span>
              </label>
              <div className="relative">
                <select
                  className="inputboxes options custom-select cursor-pointer"
                  onBlur={() => setIsOpen(false)} // Close dropdown when focus is lost
                >
                  <option>Choose</option>
                  <option>Dubai</option>
                  <option>London</option>
                  <option>New York</option>
                </select>
              </div>
            </div>

            <div>
              <label className="adduserlabel">
                No. Of Branches(IDs) <span className="text-[#F5640D]">*</span>
              </label>
              <input
                type="text"
                className="inputboxes"
                placeholder="Your answer"
              />
            </div>

            <div>
              <label className="adduserlabel">
                Contact Numbers (To be shown in software){" "}
                <span className="text-[#F5640D]">*</span>
              </label>
              <input
                type="text"
                className="inputboxes"
                placeholder="Your answer"
              />
            </div>

            <div>
              <label className="adduserlabel">
                Company Email ID(to be shown in software){" "}
                <span className="text-[#F5640D]">*</span>
              </label>
              <input
                type="email"
                className="inputboxes"
                placeholder="Your answer"
              />
            </div>

            <div>
              <label className="adduserlabel">
                Admin email ID( for official contacts){" "}
                <span className="text-[#F5640D]">*</span>
              </label>
              <input
                type="email"
                className="inputboxes"
                placeholder="Your answer"
              />
            </div>

            <div>
              <label className="adduserlabel">
                Contact Person Name <span className="text-[#F5640D]">*</span>
              </label>
              <input
                type="text"
                className="inputboxes"
                placeholder="Your answer"
              />
            </div>

            <div>
              <label className="adduserlabel">
                Company Address <span className="text-[#F5640D]">*</span>
              </label>
              <input
                type="text"
                className="inputboxes"
                placeholder="Your answer"
              />
            </div>

            <div>
              <label className="adduserlabel">
                Need to activate GST or VAT{" "}
                <span className="text-[#F5640D]">*</span>
              </label>
              <div className="flex items-center gap-4 mt-3">
                <label className="custom-radio">
                  <input type="radio" name="gst" />
                  <span className="radio-box"></span>
                  <span>Yes</span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="gst" />
                  <span className="radio-box"></span>
                  <span>No</span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="gst" />
                  <span className="radio-box"></span>
                  <span>Maybe Later</span>
                </label>
              </div>
            </div>
          </div>

          <div className="servicefield">
            <label className="adduserlabel">
              Default Services Needed <span className="text-[#F5640D]">*</span>
            </label>
            <div className="flex flex-wrap gap-6 mt-3">
              {[
                "Air Ticketing",
                "Visa Services",
                "Insurance",
                "Emigration",
                "Attestation",
                "Holiday Packages",
                "Hotel Booking",
                "Train Tickets",
                "Others",
              ].map((service) => (
                <label key={service} className="flex items-center w-[18%]">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="servicesspan">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="adduserlabel">
              Bank Account Details (To be shown in invoices)
            </label>
            <input
              type="text"
              className="inputboxes bankdetails"
              placeholder="Your answer"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 uploadsuser">
            <div>
              <label className="adduserlabel">
                Bank QR code (if any to be shown in invoices)
              </label>
              <div className="file-upload inputboxes">
                <span className="addfile">
                  {bankQrFileName || (
                    <>
                      Add File <i className="upload-icon"></i>
                    </>
                  )}
                </span>
                <input
                  type="file"
                  className="inputboxes"
                  onChange={(e) => handleFileChange(e, setBankQrFileName)}
                />
                <small>Upload 1 supported file: PDF or image. Max 1 MB.</small>
              </div>
            </div>

            <div>
              <label className="adduserlabel">Company Logo</label>
              <div className="file-upload inputboxes">
                <span className="addfile">
                  {companyLogoFileName || (
                    <>
                      Add File <i className="upload-icon"></i>
                    </>
                  )}
                </span>
                <input
                  type="file"
                  className="inputboxes"
                  onChange={(e) => handleFileChange(e, setCompanyLogoFileName)}
                />
                <small>Upload 1 supported file: Max 10 MB.</small>
              </div>
            </div>
          </div>

          <div className="w-[55%] acountauditing">
            <label className="adduserlabel2">
            Accounts Auditing Needed (Extra Charges Applicable) : This will be done by a concerned auditor. includes internal and external auditing, Tax consultations, GST or VAT consultations, Income Tax Filing Consultations etc. 
            </label>
            <div className="flex items-center gap-4 mt-3">
                <label className="custom-radio">
                  <input type="radio" name="account auditing" />
                  <span className="radio-box"></span>
                  <span>Yes</span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="account auditing" />
                  <span className="radio-box"></span>
                  <span>No</span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="account auditing" />
                  <span className="radio-box"></span>
                  <span>Maybe Later</span>
                </label>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="adduserlabel">
              Need Invoice Excel Upload Option<br/>
              <span className="extracharge">
              (Extra charges applicable)
              </span>
              <span className="text-[#F5640D]">*</span>
              </label>
              <div className="flex items-center gap-4 mt-3">
                <label className="custom-radio">
                  <input type="radio" name="invoice" />
                  <span className="radio-box"></span>
                  <span>Yes</span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="invoice" />
                  <span className="radio-box"></span>
                  <span>No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="adduserlabel">
                You got reference from (if any)
              </label>
              <input
                type="text"
                className="inputboxes"
                placeholder="Your answer"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-[#254396] text-white rounded-md hover:bg-[#1e3679] addusersubmit duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
