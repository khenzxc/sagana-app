import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";
import { FaClipboardList, FaIdCard, FaMapMarkerAlt } from "react-icons/fa";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // === FORM FIELDS ===
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [gender, setGender] = useState("");
  const [altContact, setAltContact] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [postal, setPostal] = useState("");
  const [passcode, setPasscode] = useState(["", "", "", "", "", ""]);
  const [confirmPasscode, setConfirmPasscode] = useState(["", "", "", "", "", ""]);

  // Refs for passcode inputs
  const passcodeRefs = useRef([]);
  const confirmRefs = useRef([]);

  // === HANDLE STEP NAVIGATION ===
  const handleNext = () => {
    // Step 2: Email
    if (step === 2 && !email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    // Step 3: Contact number
    if (step === 3 && !contact.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    // Step 4: Personal Information
    if (step === 4 && (!firstName.trim() || !lastName.trim())) {
      alert("Please complete your personal information (First and Last Name are required).");
      return;
    }

    // Step 5: Contact Information
    if (step === 5 && (!civilStatus || !gender || !contact.trim())) {
      alert("Please complete your contact information (Civil status, Gender, and Contact are required).");
      return;
    }

    // Step 6: Address
    if (step === 6) {
      if (!province || !city || !street.trim() || !postal.trim()) {
        alert("Please complete your address details before continuing.");
        return;
      }

      if (!/^\d{4}$/.test(postal)) {
        alert("Postal code must be exactly 4 digits.");
        return;
      }
    }

    // Step 7: Create Passcode
    if (step === 7 && passcode.some((d) => !d)) {
      alert("Please enter your 6-digit passcode.");
      return;
    }

    // Step 8: Confirm Passcode
    if (step === 8 && confirmPasscode.join("") !== passcode.join("")) {
      alert("Passcodes do not match. Please re-enter.");
      return;
    }

    if (step < 9) setStep((prev) => prev + 1);
    else navigate("/dashboard");
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  // === PASSCODE LOGIC ===
  const handlePasscodeChange = (index, value, setFn, refs) => {
    if (/^[0-9]?$/.test(value)) {
      const updated = [...(setFn === setPasscode ? passcode : confirmPasscode)];
      updated[index] = value;
      setFn(updated);
      if (value && index < 5) refs.current[index + 1]?.focus();
      if (!value && index > 0) refs.current[index - 1]?.focus();
    }
  };

  return (
    <section
      className="signup-container"
      style={{
        background: `url(${import.meta.env.BASE_URL}farmer-bg.png) center center / cover no-repeat`,
      }}
    >
      {/* Left logo */}
      <div className="signup-left">
        <img
          src={`${import.meta.env.BASE_URL}sagana-logo.png`}
          alt="Sagana Logo"
          className="signup-logo"
        />
      </div>

      {/* Right content */}
      <div className="signup-right">
        <div className="signup-card">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="requirements-step">
              <h2>To open an account, you need to:</h2>
              <ul className="requirements-list">
                <li><FaClipboardList /> Be 18 years old and above</li>
                <li><FaIdCard /> Have a valid Philippine ID</li>
                <li><FaMapMarkerAlt /> Have a home address in the Philippines</li>
              </ul>
              <button className="signup-next-btn" onClick={handleNext}>Next</button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h2>Sign Up</h2>
              <input
                type="email"
                placeholder="Email address"
                className="signup-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="no-email">I don’t have an email address</p>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h2>Enter your mobile number</h2>
              <div className="phone-input-group">
                <select className="country-code" value="+63" disabled>
                  <option value="+63">🇵🇭 +63</option>
                </select>
                <input
                  type="tel"
                  placeholder="9XXXXXXXXX"
                  className="signup-input phone-input"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  maxLength={10}
                />
              </div>
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="personal-info-step">
              <h2>Personal Information</h2>

              <div className="input-row">
                <div className="input-group">
                  <label className="signup-label">Legal First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="signup-input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label className="signup-label">Legal Middle Name</label>
                  <input
                    type="text"
                    placeholder="Middle Name"
                    className="signup-input"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
              </div>

              <label className="signup-label">Legal Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="signup-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <label className="signup-label">Date of Birth</label>
              <div className="dob-group">
                <input type="text" placeholder="MM" className="dob-input" maxLength={2} />
                <input type="text" placeholder="DD" className="dob-input" maxLength={2} />
                <input type="text" placeholder="YYYY" className="dob-input" maxLength={4} />
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="contact-info-step">
              <h2>Contact Information</h2>

              <div className="input-row">
                <div className="input-group">
                  <label className="signup-label">Civil Status</label>
                  <select
                    className="signup-input"
                    value={civilStatus}
                    onChange={(e) => setCivilStatus(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                  </select>
                </div>

                <div className="input-group">
                  <label className="signup-label">Gender</label>
                  <select
                    className="signup-input"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label className="signup-label">Email Address</label>
                <input
                  type="email"
                  placeholder="juanadelacruz@gmail.com"
                  className="signup-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="signup-label">Contact Number</label>
                <input
                  type="tel"
                  placeholder="0923456789"
                  className="signup-input"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="signup-label">Alternative Contact Number</label>
                <input
                  type="tel"
                  placeholder="0923456789"
                  className="signup-input"
                  value={altContact}
                  onChange={(e) => setAltContact(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* STEP 6: Address */}
          {step === 6 && (
            <div className="address-info-step">
              <h2>Address</h2>

              <div className="input-row">
                <div className="input-group">
                  <label className="signup-label">Province</label>
                  <select
                    className="signup-input"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  >
                    <option value="">Province</option>
                    <option value="Laguna">Laguna</option>
                    <option value="Batangas">Batangas</option>
                    <option value="Cavite">Cavite</option>
                  </select>
                </div>

                <div className="input-group">
                  <label className="signup-label">City</label>
                  <select
                    className="signup-input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">City</option>
                    <option value="Calamba">Calamba</option>
                    <option value="San Pablo">San Pablo</option>
                    <option value="Tanauan">Tanauan</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label className="signup-label">Permanent Street Address</label>
                <input
                  type="text"
                  placeholder="House # / Building / Street"
                  className="signup-input"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="signup-label">Postal Code (Permanent Address)</label>
                <input
                  type="text"
                  placeholder="Enter 4-digit postal code"
                  className="signup-input"
                  maxLength={4}
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="signup-label">
                  Is your Present address the same as your permanent address?
                </label>
                <div className="radio-group">
                  <label className="radio-option">
                    <input type="radio" name="sameAddress" value="yes" /> Yes
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="sameAddress" value="no" /> No
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* STEP 7 */}
          {step === 7 && (
            <>
              <h2>Create a 6-digit passcode</h2>
              <div className="passcode-boxes">
                {passcode.map((num, i) => (
                  <input
                    key={i}
                    ref={(el) => (passcodeRefs.current[i] = el)}
                    maxLength={1}
                    type="password"
                    value={num}
                    className="passcode-input"
                    onChange={(e) =>
                      handlePasscodeChange(i, e.target.value, setPasscode, passcodeRefs)
                    }
                  />
                ))}
              </div>
            </>
          )}

          {/* STEP 8 */}
          {step === 8 && (
            <>
              <h2>Confirm your passcode</h2>
              <div className="passcode-boxes">
                {confirmPasscode.map((num, i) => (
                  <input
                    key={i}
                    ref={(el) => (confirmRefs.current[i] = el)}
                    maxLength={1}
                    type="password"
                    value={num}
                    className="passcode-input"
                    onChange={(e) =>
                      handlePasscodeChange(i, e.target.value, setConfirmPasscode, confirmRefs)
                    }
                  />
                ))}
              </div>
            </>
          )}

          {/* STEP 9 */}
          {step === 9 && (
            <>
              <h2>Maging Una sa mga Balita at Updates</h2>
              <p>Nais mo bang makatanggap ng balita tungkol sa bagong features at promos?</p>
              <div className="update-buttons">
                <button className="yes-btn" onClick={handleNext}>Oo, gusto ko</button>
                <button className="no-btn" onClick={handleNext}>Maybe later</button>
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          {step > 1 && step < 9 && (
            <div className="nav-buttons">
              {step > 2 && (
                <button className="back-btn" onClick={handleBack}>Back</button>
              )}
              <button className="signup-next-btn" onClick={handleNext}>Next</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
