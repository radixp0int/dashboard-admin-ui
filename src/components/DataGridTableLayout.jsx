import React from "react";
import { Box, useTheme } from "@mui/material";

const DataGridTableLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      mt=".8rem"
      height="80vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.grey[100],
          typography: theme.typography.h6,
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.primary.alt,
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: "none",
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.secondary[200]} !important`,
          typography: theme.typography.h6,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default DataGridTableLayout;
