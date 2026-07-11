import React, { useState, useEffect } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/Footer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { CardMedia, CardContent } from "@material-ui/core";
import projectsData from "./writing.json";
import { useStyles, NEON, CYAN, PANEL } from "./styles";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import LaunchIcon from "@material-ui/icons/Launch";
import HomeIcon from "@material-ui/icons/Home";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = projectsData;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((project) => project.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, searchQuery]);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const appliedTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? NEON : "#00995a",
      },
      secondary: {
        main: CYAN,
      },
      background: {
        default: darkMode ? "#071018" : "#e8f4ee",
        paper: darkMode ? PANEL : "#f2fbf6",
      },
      text: {
        primary: darkMode ? "#e8fff4" : "#06140f",
        secondary: darkMode ? "#8fa3b5" : "#3d5a4c",
      },
    },
    typography: {
      fontFamily: '"Space Grotesk", "Oxanium", Roboto, Helvetica, Arial, sans-serif',
      h1: {
        fontFamily: '"Oxanium", sans-serif',
        fontWeight: 800,
        fontSize: "3rem",
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
        textTransform: "uppercase",
      },
      h2: {
        fontFamily: '"Oxanium", sans-serif',
        fontWeight: 700,
        fontSize: "2.5rem",
        lineHeight: 1.3,
      },
      h3: {
        fontFamily: '"Oxanium", sans-serif',
        fontWeight: 700,
        fontSize: "2rem",
        lineHeight: 1.4,
      },
      h4: {
        fontFamily: '"Oxanium", sans-serif',
        fontWeight: 700,
        fontSize: "1.5rem",
        lineHeight: 1.5,
      },
      h5: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: 1.6,
      },
      h6: {
        fontFamily: '"Oxanium", sans-serif',
        fontWeight: 600,
        fontSize: "1rem",
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 0,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            backgroundColor: darkMode ? "#071018" : "#e8f4ee",
            backgroundImage: darkMode
              ? "radial-gradient(900px 500px at 85% 10%, rgba(0, 255, 156, 0.09), transparent 55%), radial-gradient(700px 400px at 10% 80%, rgba(45, 226, 230, 0.06), transparent 50%)"
              : "radial-gradient(900px 500px at 85% 10%, rgba(0, 200, 120, 0.12), transparent 55%)",
            backgroundAttachment: "fixed",
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: 0,
          backgroundColor: darkMode ? "rgba(0, 255, 156, 0.04)" : "rgba(255,255,255,0.9)",
          "& $notchedOutline": {
            borderColor: darkMode ? "rgba(0, 255, 156, 0.18)" : "rgba(0, 120, 80, 0.22)",
          },
          "&:hover $notchedOutline": {
            borderColor: darkMode ? NEON : "#00995a",
          },
          "&$focused $notchedOutline": {
            borderColor: darkMode ? NEON : "#00995a",
          },
        },
        input: {
          color: darkMode ? "#e8fff4" : "#06140f",
          fontFamily: '"Share Tech Mono", monospace',
        },
      },
      MuiSelect: {
        select: {
          color: darkMode ? "#e8fff4" : "#06140f",
          fontFamily: '"Share Tech Mono", monospace',
        },
      },
      MuiChip: {
        root: {
          borderRadius: 0,
          fontFamily: '"Share Tech Mono", monospace',
        },
      },
      MuiCard: {
        root: {
          borderRadius: 0,
          backgroundColor: darkMode ? PANEL : "#f2fbf6",
        },
      },
      MuiPaper: {
        rounded: {
          borderRadius: 0,
        },
      },
    },
    shadows: [
      "none",
      "0 0 12px rgba(0, 255, 156, 0.08)",
      "0 0 16px rgba(0, 255, 156, 0.1)",
      "0 0 20px rgba(0, 255, 156, 0.12)",
      "0 0 24px rgba(0, 255, 156, 0.14)",
      "0 0 28px rgba(0, 255, 156, 0.16)",
      "0 0 32px rgba(0, 255, 156, 0.18)",
      "0 0 36px rgba(0, 255, 156, 0.2)",
      "0 0 40px rgba(0, 255, 156, 0.22)",
      "0 0 44px rgba(0, 255, 156, 0.24)",
      "0 0 48px rgba(0, 255, 156, 0.26)",
      "0 0 52px rgba(0, 255, 156, 0.28)",
      "0 0 56px rgba(0, 255, 156, 0.3)",
      "0 0 60px rgba(0, 255, 156, 0.32)",
      "0 0 64px rgba(0, 255, 156, 0.34)",
      "0 0 68px rgba(0, 255, 156, 0.36)",
      "0 0 72px rgba(0, 255, 156, 0.38)",
      "0 0 76px rgba(0, 255, 156, 0.4)",
      "0 0 80px rgba(0, 255, 156, 0.42)",
      "0 0 84px rgba(0, 255, 156, 0.44)",
      "0 0 88px rgba(0, 255, 156, 0.46)",
      "0 0 92px rgba(0, 255, 156, 0.48)",
      "0 0 96px rgba(0, 255, 156, 0.5)",
      "0 0 100px rgba(0, 255, 156, 0.52)",
      "0 0 104px rgba(0, 255, 156, 0.54)",
    ],
  });

  const getCategoryColor = (category) => {
    const colors = {
      "Free Code Camp": CYAN,
      "Enfoque de Negocios": NEON,
      "Adviters": "#b8ff3c",
      "Ututo": "#a78bfa",
      "All": "#8fa3b5"
    };
    return colors[category] || "#8fa3b5";
  };

  return (
    <div className="App">
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        
        {/* Modern Header */}
        <AppBar position="static" elevation={0} color="transparent" className={classes.header}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h4" className={classes.logo}>
                ✍️ Writing Portfolio
              </Typography>
              <Box className={classes.headerActions}>
                <Button
                  color="inherit"
                  href="https://jpromano.net"
                  className={classes.headerButton}
                  startIcon={<HomeIcon />}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={toggleDarkMode}
                  className={classes.themeToggle}
                  startIcon={darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                >
                  {darkMode ? "Light" : "Dark"}
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Hero Section */}
        <Box className={classes.heroSection}>
          <Container maxWidth="lg">
            <Fade in timeout={1000}>
              <Box className={classes.heroContent}>
                <Typography variant="h1" className={classes.heroTitle}>
                  My Writing Collection
                </Typography>
                <Typography variant="h5" className={classes.heroSubtitle}>
                  Blog posts, tutorials, and articles I've written
                </Typography>
                <Typography variant="body1" className={classes.heroDescription}>
                  Explore my collection of articles spanning web development, business insights, and technical tutorials.
                </Typography>
              </Box>
            </Fade>
          </Container>
        </Box>

        {/* Filters and Search Section */}
        <Container maxWidth="lg" className={classes.filtersSection}>
          <Paper 
            elevation={0} 
            className={classes.filtersPaper}
            style={{
              background: darkMode ? "rgba(10, 16, 22, 0.95)" : "rgba(242, 251, 246, 0.95)",
              border: darkMode ? "1px solid rgba(0, 255, 156, 0.18)" : "1px solid rgba(0, 120, 80, 0.22)",
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <Select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className={classes.categorySelect}
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="All">All Categories</MenuItem>
                  <MenuItem value="Free Code Camp">Free Code Camp</MenuItem>
                  <MenuItem value="Enfoque de Negocios">Enfoque de Negocios</MenuItem>
                  <MenuItem value="Adviters">Adviters</MenuItem>
                  <MenuItem value="Ututo">Ututo</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  placeholder="Search articles by title or category..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className={classes.searchField}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Chip
                  label={`${filteredProjects.length} articles`}
                  color="primary"
                  variant="outlined"
                  className={classes.projectCounter}
                />
              </Grid>
            </Grid>
          </Paper>
        </Container>

        {/* Articles Grid */}
        <Container maxWidth="lg" className={classes.projectsSection}>
          {filteredProjects.length === 0 ? (
            <Box className={classes.noResults}>
              <Typography variant="h6" color="textSecondary">
                No articles found matching your criteria
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Try adjusting your search or category filter
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Grow in timeout={300 + index * 100}>
                    <Card 
                      className={classes.projectCard} 
                      elevation={2}
                      style={{
                        backgroundColor: darkMode ? PANEL : "#f2fbf6",
                        border: darkMode ? "1px solid rgba(0, 255, 156, 0.18)" : "1px solid rgba(0, 120, 80, 0.22)",
                      }}
                    >
                      <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        image={require(`${project.imageSrc}`)}
                        alt={project.title}
                      />
                      <CardContent 
                        className={classes.cardContent}
                        style={{
                          color: darkMode ? "#e8fff4" : "#06140f",
                        }}
                      >
                        <Typography 
                          variant="h6" 
                          className={classes.projectTitle}
                          style={{
                            color: darkMode ? "#e8fff4" : "#06140f",
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Chip
                          label={project.category}
                          size="small"
                          style={{
                            backgroundColor: getCategoryColor(project.category),
                            color: "#03140c",
                            marginTop: 8,
                            marginBottom: 8,
                            borderRadius: 0,
                          }}
                        />
                      </CardContent>
                      <CardActions 
                        className={classes.cardActions}
                        style={{
                          backgroundColor: darkMode ? PANEL : "#f2fbf6",
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.actionButton}
                          style={{
                            backgroundColor: darkMode ? NEON : "#00995a",
                            color: darkMode ? "#03140c" : "#FFFFFF",
                          }}
                          fullWidth
                        >
                          Read Article
                        </Button>
                      </CardActions>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>

        {/* Footer */}
        <Box className={classes.footerSection}>
          <Container maxWidth="lg">
            <Footer />
          </Container>
        </Box>

        {/* Scroll to Top Button */}
        <Zoom in={showScrollTop}>
          <Fab
            color="primary"
            size="medium"
            onClick={scrollToTop}
            className={classes.scrollTopButton}
            aria-label="scroll to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </ThemeProvider>
    </div>
  );
}

export default App;