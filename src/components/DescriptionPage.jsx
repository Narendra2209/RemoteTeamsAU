import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DescriptionPage.css";

const DescriptionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    mediaSrc,
    mediaUrl,
    mediaType,
    prompt,
    facebookCaption,
    instagramCaption,
    linkedinCaption,
    description,
  } = location.state || {};

  const handlePost = async () => {
    try {
      await fetch(
        "https://rtaisrini.app.n8n.cloud/webhook/AU post to Socialmedia",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mediaSrc,
            mediaUrl,
            mediaType,
            prompt,
            facebookCaption,
            instagramCaption,
            linkedinCaption,
            description,
          }),
        }
      );
      alert("Posted successfully!");
    } catch (err) {
      alert("Failed to post.");
    }
  };

  const handleReject = () => {
    navigate("/"); // Go to home page
  };

  if (!mediaSrc && !mediaUrl) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>No media found. Go back and upload.</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="description-page">
      <h1>Media Description</h1>

      {mediaType === "image" ? (
        <img
          src={mediaSrc || mediaUrl}
          alt="Preview"
          style={{
            maxWidth: "320px",
            maxHeight: "240px",
            borderRadius: "12px",
            margin: "0 auto",
            display: "block",
          }}
        />
      ) : (
        <video
          src={mediaSrc || mediaUrl}
          controls
          style={{
            maxWidth: "320px",
            maxHeight: "240px",
            borderRadius: "12px",
            margin: "0 auto",
            display: "block",
          }}
        />
      )}

      {/* <div className="prompt-info">
        <strong>Prompt:</strong> {prompt || "No prompt provided."}
      </div> */}

      {/* <div className="description-box">
        <strong>Description:</strong>
        <p>{description}</p>
      </div> */}

      <div className="platform-captions">
        {facebookCaption && (
          <p>
            <strong>Facebook:</strong> {facebookCaption}
          </p>
        )}
        {instagramCaption && (
          <p>
            <strong>Instagram:</strong> {instagramCaption}
          </p>
        )}
        {linkedinCaption && (
          <p>
            <strong>LinkedIn:</strong> {linkedinCaption}
          </p>
        )}
      </div>

      {mediaUrl && (
        <div className="media-link">
          <strong>Uploaded File Link:</strong>
          <a
            href={mediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {mediaUrl}
          </a>
        </div>
      )}

      <div style={{ marginTop: "24px" }}>
        <button className="upload-btn" onClick={handlePost}>
          Post
        </button>
        <button
          className="cancel-btn"
          onClick={handleReject}
          style={{ marginLeft: "12px" }}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default DescriptionPage;