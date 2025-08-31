import React from "react";

function DownloadResume() {
  return (
    <section>
      <h2>Resume</h2>
      <a
        href="/Senior_ReactJS_Developer.pdf"
        download="SatyavratJha_Resume.pdf"
      >
        <button>Download My Resume</button>
      </a>
    </section>
  );
}

export default DownloadResume;
