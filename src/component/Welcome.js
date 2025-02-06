import { Grid, Typography, Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    margin: 10,
    backgroundColor: "#f0f4f8", // Light background color for the cards
    textAlign: "center", // Center the text in the card
  },
  media: {
    height: 80,
    width: 80, // Make the media element a square for easy rounding
    borderRadius: "50%", // Round the image
    backgroundSize: 'cover', // Make sure the image covers the area
    margin: "0 auto", // Center the image horizontally
    backgroundColor: '#fff', // Adds a white background for better logo visibility
    padding: 10, // Adds padding around the image
  },
  gridItem: {
    maxWidth: '33%', // Ensures three items per row
    flexBasis: '25%',
    paddingLeft:'30px'
  },
  cardContent: {
    padding: "25px", // Add padding inside the card content
  },
  pageBackground: {
    padding: "30px",
    minHeight: "93vh",
    background: "linear-gradient(135deg, #ece9e6 0%, #ffffff 100%)", // Light overall background color
  },
  title: {
    color: 'red', // Primary color for titles
    marginBottom: '60px',
  },
  subTitle: {
    color: 'red', 
    marginTop: "100px",
    marginBottom: "50px",
  }
});

// Expanded top recruiters and students data
const recruiters = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com", highestPackage: "45 LPA", recruits: 10 },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", highestPackage: "40 LPA", recruits: 8 },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com", highestPackage: "38 LPA", recruits: 12 },
  { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com", highestPackage: "35 LPA", recruits: 9 },
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com", highestPackage: "50 LPA", recruits: 5 },
  { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com", highestPackage: "48 LPA", recruits: 6 },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com", highestPackage: "18 LPA", recruits: 6 },
  { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com", highestPackage: "30 LPA", recruits: 6 },
  // Add more recruiters here
];

const students = [
  { name: "Charles", image: "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg", company: "Google", package: "45 LPA", role: "Software Engineer", year: "2024" },
  { name: "Pari Purna", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwiruafD-4A_k3Pq1s0qLoLzRP5LENJ8qFA&s", company: "Microsoft", package: "40 LPA", role: "Data Scientist", year: "2024" },
  { name: "Shreekar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHWjuNjL58mec8NfxQznWboSaylHNsIUIZwg&s", company: "Amazon", package: "38 LPA", role: "Cloud Architect", year: "2024" },
  { name: "Nithin", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Qv5s5REahX2Vcj11jPnU1ibiEUfTc-VMAQ&s", company: "Facebook", package: "35 LPA", role: "Product Manager", year: "2024" },
  { name: "Shirisha", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhfNZTuKqQVBMKQPkHabC9NI0bzHFkaMCAg&s", company: "Apple", package: "50 LPA", role: "UI/UX Designer", year: "2024" },
  { name: "Divya vani", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_UoXwaGYHlqsTfmvIrH2bSyE2NpcA62_hw&s", company: "Netflix", package: "48 LPA", role: "Data Analyst", year: "2024" },
  // Add more students here
];

const Welcome = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.pageBackground}
    >
      <Typography variant="h2" className={classes.title}>Welcome to Placement Cell</Typography>

      {/* Top Recruiters Section */}
      <Typography variant="h4" className={classes.title}>Top Recruiters</Typography>
      <Grid container justify="center" alignItems="flex-start">
        {recruiters.map((recruiter, index) => (
          <Grid item key={index} className={classes.gridItem}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={recruiter.logo}
                title={recruiter.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">{recruiter.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Highest Package: {recruiter.highestPackage}<br />
                  Students Recruited: {recruiter.recruits}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Students with Highest Packages Section */}
      <Typography variant="h4" className={classes.subTitle}>Students with Highest Packages</Typography>
      <Grid container justify="center" alignItems="flex-start">
        {students.map((student, index) => (
          <Grid item key={index} className={classes.gridItem}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={student.image} 
                title={student.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">{student.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Company: {student.company}<br />
                  Package: {student.package}<br />
                  Role: {student.role}<br />
                  Year: {student.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};






export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
