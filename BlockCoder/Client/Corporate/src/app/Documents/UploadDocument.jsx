import React, { useState } from 'react';
import {
  Button,
  Typography,
  Paper,
  Box,
  IconButton,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import SignatureCanvas from 'react-signature-canvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DualUploadDocument = () => {
  const [moaFile, setMoaFile] = useState(null);
  const [aoaFile, setAoaFile] = useState(null);
  const [partnershipDeedFile, setPartnershipDeedFile] = useState(null);
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [similarityPercentage, setSimilarityPercentage] = useState('');
  const [calculatingSimilarity, setCalculatingSimilarity] = useState(false);
  const [partners, setPartners] = useState(['Mr SK Gupta', 'Dummy Partner 2']);
  const [signatureRefs, setSignatureRefs] = useState([]);
  const handleSignature = (index, partner) => {
    const canvas = signatureRefs[index];
    const image = canvas.toDataURL(); // Get the signature as a data URL

    // Here, you would typically send the signature data to your server for processing
   
    // Display a toast notification
    toast.success(`${partner} has signed. Complete consent management.`);
  };
  const handleFileSelect = (event, fileType) => {
    const file = event.target.files[0];

    if (fileType === 'moa') {
      setMoaFile(file);
    } else if (fileType === 'aoa') {
      setAoaFile(file);
    } else if (fileType === 'partnershipDeed') {
      setPartnershipDeedFile(file);
    }
  };

  const handleUpload = async (fileType) => {
    const selectedFile = fileType === 'moa' ? moaFile : fileType === 'aoa' ? aoaFile : partnershipDeedFile;

    if (selectedFile) {
      console.log(`Uploading ${fileType}: ${selectedFile.name}`);
      // Implement the upload logic for MoA, AoA, and Partnership Deed separately if needed

      // For demonstration purposes, we'll assume the documents are successfully uploaded
      const newDoc = {
        label: fileType === 'moa' ? 'MoA' : fileType === 'aoa' ? 'AoA' : 'Partnership Deed',
        name: selectedFile.name,
        status: 'Uploaded',
        fetchedFromMCA: 'No', // Initially assume it's not fetched from MCA
        similarityPercentage: '', // Initialize to empty, calculate later
      };

      setUploadedDocs([...uploadedDocs, newDoc]);
      toast.success(`Wait for document verification from MCA `);
      // Simulate fetching data from MCA (you should replace this with actual fetching)
    }
  };

  const simulateFetchingData = async (document) => {
    // Simulate fetching data from MCA after a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Set the fetchedFromMCA flag and calculate similarity
    document.fetchedFromMCA = 'Yes'; // Update the flag
    setCalculatingSimilarity(true); // Start animation

    // Simulate calculating similarity (replace with actual logic)
    const calculatedPercentage = await simulateSimilarityCalculation();

    document.similarityPercentage = calculatedPercentage; // Update similarity percentage
    setCalculatingSimilarity(false); // Stop animation

    // Update the state to reflect the changes
    setUploadedDocs([...uploadedDocs]);
  };

  const simulateSimilarityCalculation = async () => {
    // Simulate calculating similarity percentage after a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // For demonstration, we'll return a random percentage (replace with actual calculation)
    const randomPercentage = Math.floor(Math.random() * 100) + 1;
    return `${randomPercentage}%`;
  };

  const clearFile = (fileType) => {
    if (fileType === 'moa') {
      setMoaFile(null);
    } else if (fileType === 'aoa') {
      setAoaFile(null);
    } else if (fileType === 'partnershipDeed') {
      setPartnershipDeedFile(null);
    }
  };
  const calculateSimilarity = async () => {
    setCalculatingSimilarity(true); // Start animation

    // Simulate calculating similarity (replace with actual logic)
    const calculatedPercentage = await simulateSimilarityCalculation();

    setSimilarityPercentage(calculatedPercentage); // Update similarity percentage
    setCalculatingSimilarity(false); // Stop animation
    toast.success(`Make your partners signed the Documents consent digitally `);
  };
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Upload Memorandum of Association (MoA), Articles of Association (AoA), and Partnership Deed
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <input
            type="file"
            accept=".pdf"
            style={{ display: 'none' }}
            id="moa-file-upload"
            onChange={(event) => handleFileSelect(event, 'moa')}
          />
          <label htmlFor="moa-file-upload">
            <Button
              variant="outlined"
              component="span"
              startIcon={<CloudUploadIcon />}
              fullWidth
            >
              Upload MoA
            </Button>
          </label>
          {moaFile && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1">{moaFile.name}</Typography>
              <IconButton
                color="secondary"
                onClick={() => clearFile('moa')}
                aria-label="Delete"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleUpload('moa')}
            disabled={!moaFile}
            fullWidth
          >
            Upload MoA
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <input
            type="file"
            accept=".pdf"
            style={{ display: 'none' }}
            id="aoa-file-upload"
            onChange={(event) => handleFileSelect(event, 'aoa')}
          />
          <label htmlFor="aoa-file-upload">
            <Button
              variant="outlined"
              component="span"
              startIcon={<CloudUploadIcon />}
              fullWidth
            >
              Upload AoA
            </Button>
          </label>
          {aoaFile && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1">{aoaFile.name}</Typography>
              <IconButton
                color="secondary"
                onClick={() => clearFile('aoa')}
                aria-label="Delete"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleUpload('aoa')}
            disabled={!aoaFile}
            fullWidth
          >
            Upload AoA
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <input
            type="file"
            accept=".pdf"
            style={{ display: 'none' }}
            id="partnership-deed-file-upload"
            onChange={(event) => handleFileSelect(event, 'partnershipDeed')}
          />
          <label htmlFor="partnership-deed-file-upload">
            <Button
              variant="outlined"
              component="span"
              startIcon={<CloudUploadIcon />}
              fullWidth
            >
              Upload Partnership Deed
            </Button>
          </label>
          {partnershipDeedFile && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1">{partnershipDeedFile.name}</Typography>
              <IconButton
                color="secondary"
                onClick={() => clearFile('partnershipDeed')}
                aria-label="Delete"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleUpload('partnershipDeed')}
            disabled={!partnershipDeedFile}
            fullWidth
          >
            Upload Partnership Deed
          </Button>
        </Grid>
        <Grid item xs={12}>

        </Grid>
        {calculatingSimilarity && (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
        
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Uploaded Documents:</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>Document Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Fetched from MCA</TableCell>

                <TableCell>Similarity Percentage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uploadedDocs.map((doc, index) => (
                <TableRow key={index}>
                  <TableCell>{doc.label}</TableCell>
                  <TableCell>{doc.name}</TableCell>
                  <TableCell>{doc.status}</TableCell>

                  <TableCell>{doc.fetchedFromMCA}</TableCell>
                  <TableCell> <Button
                    variant="contained"
                    color="primary"
                    onClick={calculateSimilarity}
                  >
                    Calculate Similarity Percentage
                  </Button></TableCell>
                  <TableCell>{similarityPercentage !== '' && (
          <Grid item xs={12}>
            <Typography variant="body1">
              {similarityPercentage}
            </Typography>
          </Grid>
        )}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Partners:</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Partner</TableCell>
                <TableCell>Digital Signature</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {partners.map((partner, index) => (
                <TableRow key={index}>
                  <TableCell>{partner}</TableCell>
                  <TableCell>
                    <SignatureCanvas
                      ref={(ref) => (signatureRefs[index] = ref)}
                      penColor="black"
                      canvasProps={{ width: 300, height: 150, className: 'sigCanvas' }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSignature(index, partner)}
                    >
                      Sign
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <ToastContainer position="top-right" />
    </Paper>
  );
};

export default DualUploadDocument;
