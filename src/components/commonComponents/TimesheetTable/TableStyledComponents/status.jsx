const Status = (props) => {
  return (
    <>
      <div
        style={{
          background: "#F4F5F8",
          fontSize: "14px",
          textAlign: "center",
          borderRadius: "10px",
          width: "82px",
          height: "32px",
          paddingTop: "7px",
        }}
      >
        {props.status === 1 ? (
          <>
            <span style={{ color: "#16C31E", fontSize: "13px" }}>Approved</span>
          </>
        ) : (
          <>
            <span style={{ color: "##FF9900", fontSize: "13px" }}>Pending</span>
          </>
        )}
      </div>
    </>
  );
};

export default Status;
