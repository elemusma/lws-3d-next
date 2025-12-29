"use client";

import { useState } from "react";

interface SignatureData {
  name: string;
  title: string;
  company: string;
  phone1: string;
  phone2: string;
  email: string;
  website1: string;
  website1Text: string;
  website2: string;
  website2Text: string;
  address: string;
  linkedinUrl: string;
  facebookUrl: string;
  profileImage1: string;
  profileImage2: string;
  cvLink: string;
  disclaimer: string;
}

const defaultData: SignatureData = {
  name: "Steven Paul",
  title: "Principal Vehicle Expert Witness & Litigation Consultant",
  company:
    "TDT Vehicle Inspection Appraisal Services | SSP Vehicle Litigation Services",
  phone1: "+1-314-886-8378",
  phone2: "+1-618-960-4696",
  email: "steve@testdrivetech.com",
  website1: "https://www.testdrivetech.com",
  website1Text: "www.testdrivetech.com",
  website2: "https://www.vehicleexpertwitness.net",
  website2Text: "www.vehicleexpertwitness.net",
  address: "18500 Burnside Rd, Carlyle, Illinois 62231",
  linkedinUrl: "https://www.linkedin.com/in/stevenscottpaul/",
  facebookUrl: "https://www.facebook.com/testdrivetech/",
  profileImage1:
    "https://testdrivetech.com/wp-content/uploads/2025/11/Steve-on-Box-Truck-Engine-Hood-Open.jpg",
  profileImage2:
    "https://testdrivetech.com/wp-content/uploads/2025/11/Steve-Classic-Car-Inspections.jpg",
  cvLink: "https://vehicleexpertwitness.net/cv/",
  disclaimer:
    "Your privacy is important to us. This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you are not the intended recipient, you are hereby notified that any dissemination, distribution, or copying of this email or its contents is strictly prohibited. If you have received this email in error, please notify the sender immediately and delete this email from your system.",
};

export default function SignatureCopyTool() {
  const [data, setData] = useState<SignatureData>(defaultData);
  const [copied, setCopied] = useState(false);

  const generateHTML = (): string => {
    return `<table cellpadding="0" cellspacing="0" border="0" style="vertical-align:-webkit-baseline-middle;font-size:12pt;font-family:Arial">
  <tbody>
    <tr>
      <td>
        <table cellpadding="0" cellspacing="0" border="0" style="vertical-align:-webkit-baseline-middle;font-size:12pt;font-family:Arial">
          <tbody>
            <tr>
              <td style="vertical-align:top">
                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align:-webkit-baseline-middle;font-size:12pt;font-family:Arial">
                  <tbody>
                    <tr>
                      <td style="text-align:center">
                        <img src="${data.profileImage1}" role="presentation" width="130" style="max-width:128px;display:block">
                      </td>
                    </tr>
                    <tr><td height="30"></td></tr>
                    <tr>
                      <td style="text-align:center">
                        <img src="${data.profileImage2}" role="presentation" width="130" style="max-width:130px;display:block">
                      </td>
                    </tr>
                    <tr><td height="30"></td></tr>
                    <tr>
                      <td style="text-align:center">
                        <div>
                          <a href="${data.linkedinUrl}" style="display:inline-block;padding:0px;background-color:rgb(98,98,99);border-radius:50%" target="_blank">
                            <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-dark-2x.png" alt="linkedin" width="24" style="background-color:rgb(98,98,99);max-width:135px;display:block;border-radius:inherit">
                          </a>
                          <span style="display:inline-block;width:5px"></span>
                          <a href="${data.facebookUrl}" style="display:inline-block;padding:0px;background-color:rgb(98,98,99);border-radius:50%" target="_blank">
                            <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-dark-2x.png" alt="facebook" width="24" style="background-color:rgb(98,98,99);max-width:135px;display:block;border-radius:inherit">
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width="46"><div style="width:46px"></div></td>
              <td style="padding:0px;vertical-align:middle">
                <h2 style="margin:0px;font-size:18px;font-family:Arial;color:rgb(0,0,0);font-weight:600">
                  ${data.name}
                </h2>
                <p style="margin:0px;color:rgb(0,0,0);font-size:14px;line-height:22px">
                  ${data.title}
                </p>
                <div style="margin:0px;font-weight:500;color:rgb(0,0,0);font-size:14px;line-height:22px">
                  ${data.company}
                </div>
                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align:-webkit-baseline-middle;font-size:12pt;font-family:Arial;width:100%">
                  <tbody>
                    <tr><td height="30"></td></tr>
                    <tr>
                      <td width="auto" style="width:100%;height:1px;border-bottom:1px solid rgb(254,0,0);display:block"></td>
                    </tr>
                    <tr><td height="30"></td></tr>
                  </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align:-webkit-baseline-middle;font-size:12pt;font-family:Arial">
                  <tbody>
                    <tr style="vertical-align:middle;height:25px">
                      <td width="30" style="vertical-align:middle">
                        <span style="display:inline-block;background-color:rgb(254,0,0)">
                          <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-dark-2x.png" alt="phone" width="13" style="display:block">
                        </span>
                      </td>
                      <td style="padding:0px;color:rgb(0,0,0)">
                        <a href="tel:${data.phone1}" style="text-decoration:none;color:rgb(0,0,0);font-size:14px">${data.phone1}</a> | 
                        <a href="tel:${data.phone2}" style="text-decoration:none;color:rgb(0,0,0);font-size:14px">${data.phone2}</a>
                      </td>
                    </tr>
                    <tr style="vertical-align:middle;height:25px">
                      <td width="30" style="vertical-align:middle">
                        <span style="display:inline-block;background-color:rgb(254,0,0)">
                          <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-dark-2x.png" alt="email" width="13" style="display:block">
                        </span>
                      </td>
                      <td style="padding:0px;color:rgb(0,0,0)">
                        <a href="mailto:${data.email}" style="text-decoration:none;color:rgb(0,0,0);font-size:14px">${data.email}</a>
                      </td>
                    </tr>
                    <tr style="vertical-align:middle;height:25px">
                      <td width="30" style="vertical-align:middle">
                        <span style="display:inline-block;background-color:rgb(254,0,0)">
                          <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-dark-2x.png" alt="website" width="13" style="display:block">
                        </span>
                      </td>
                      <td style="padding:0px;color:rgb(0,0,0)">
                        <a href="${data.website1}" style="text-decoration:none;color:rgb(0,0,0);font-size:14px" target="_blank">${data.website1Text}</a>
                      </td>
                    </tr>
                    <tr style="vertical-align:middle;height:25px">
                      <td width="30" style="vertical-align:middle">
                        <span style="display:inline-block;background-color:rgb(254,0,0)">
                          <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-dark-2x.png" alt="website" width="13" style="display:block">
                        </span>
                      </td>
                      <td style="padding:0px;color:rgb(0,0,0)">
                        <a href="${data.website2}" style="text-decoration:none;color:rgb(0,0,0);font-size:14px" target="_blank">${data.website2Text}</a>
                      </td>
                    </tr>
                    <tr style="vertical-align:middle;height:25px">
                      <td width="30" style="vertical-align:middle">
                        <span style="display:inline-block;background-color:rgb(254,0,0)">
                          <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-dark-2x.png" alt="address" width="13" style="display:block">
                        </span>
                      </td>
                      <td style="padding:0px;color:rgb(0,0,0);font-size:14px">${data.address}</td>
                    </tr>
                  </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align:-webkit-baseline-middle;font-size:12pt;font-family:Arial">
                  <tbody><tr><td height="30"></td></tr></tbody>
                </table>
                <span style="display:block;text-align:left">
                  <a href="${data.cvLink}" style="border-width:6px 12px;border-style:solid;border-color:rgb(151,0,0);display:inline-block;background-color:rgb(151,0,0);color:rgb(255,255,255);font-weight:700;text-decoration:none;text-align:center;line-height:40px;font-size:12px;border-radius:3px" target="_blank">Download My Curriculum Vitae (CV)</a>
                  <p style="font-size:11px;margin-top:15px;">${data.disclaimer}</p>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`;
  };

  const copyToClipboard = async () => {
    try {
      const html = generateHTML();
      const blob = new Blob([html], { type: "text/html" });
      const data = [new ClipboardItem({ "text/html": blob })];
      await navigator.clipboard.write(data);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      // Fallback for browsers that don't support HTML copying
      try {
        await navigator.clipboard.writeText(generateHTML());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy also failed:", fallbackErr);
      }
    }
  };

  const handleInputChange = (field: keyof SignatureData, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-[100px] px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Email Signature Generator
        </h1>
        <p className="text-gray-600 mb-8">
          Customize your signature and copy the formatted HTML for Google
          Workspace
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Edit Section */}
          <div className="bg-white rounded-lg shadow-md p-6 md:order-1 order-2">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Edit Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={data.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  value={data.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image 1 URL
                </label>
                <input
                  type="text"
                  value={data.profileImage1}
                  onChange={(e) =>
                    handleInputChange("profileImage1", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image 2 URL
                </label>
                <input
                  type="text"
                  value={data.profileImage2}
                  onChange={(e) =>
                    handleInputChange("profileImage2", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone 1
                  </label>
                  <input
                    type="text"
                    value={data.phone1}
                    onChange={(e) =>
                      handleInputChange("phone1", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone 2
                  </label>
                  <input
                    type="text"
                    value={data.phone2}
                    onChange={(e) =>
                      handleInputChange("phone2", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="text"
                  value={data.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website 1 URL
                </label>
                <input
                  type="text"
                  value={data.website1}
                  onChange={(e) =>
                    handleInputChange("website1", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website 1 Display Text
                </label>
                <input
                  type="text"
                  value={data.website1Text}
                  onChange={(e) =>
                    handleInputChange("website1Text", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website 2 URL
                </label>
                <input
                  type="text"
                  value={data.website2}
                  onChange={(e) =>
                    handleInputChange("website2", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website 2 Display Text
                </label>
                <input
                  type="text"
                  value={data.website2Text}
                  onChange={(e) =>
                    handleInputChange("website2Text", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={data.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  value={data.linkedinUrl}
                  onChange={(e) =>
                    handleInputChange("linkedinUrl", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Facebook URL
                </label>
                <input
                  type="text"
                  value={data.facebookUrl}
                  onChange={(e) =>
                    handleInputChange("facebookUrl", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CV Download Link
                </label>
                <input
                  type="text"
                  value={data.cvLink}
                  onChange={(e) => handleInputChange("cvLink", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Disclaimer Text
                </label>
                <textarea
                  value={data.disclaimer}
                  onChange={(e) =>
                    handleInputChange("disclaimer", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                  style={{ height: "150px" }}
                />
              </div>
            </div>
          </div>

          {/* Preview & Copy Section */}
          <div className="flex flex-col gap-4 md:order-2 order-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                How to Use
              </h3>
              <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside mb-4">
                <li>Click the &quot;Copy Signature&quot; button below</li>
                <li>Go to Google Workspace Settings → Signature</li>
                <li>
                  Click in the signature box, press Enter twice and paste
                  (Ctrl+V or Cmd+V)
                </li>
                <li>Click Save</li>
              </ol>
              <button
                onClick={copyToClipboard}
                className={`w-full py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-accent text-white hover:bg-[var(--accent-secondary)]"
                }`}
              >
                {copied ? "✓ Copied to Clipboard!" : "Copy Signature"}
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex-1">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Preview
              </h2>
              <div className="border border-gray-200 rounded-md p-4 bg-white overflow-auto max-h-100">
                <div dangerouslySetInnerHTML={{ __html: generateHTML() }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
