import { defaultTheme as theme } from "./theme"
import { ThemeProvider } from "@mui/material/styles"
import { Box, AppBar, CardHeader, Avatar, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

const App = () => {

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					height: "100vh",
					backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://upload.wikimedia.org/wikipedia/commons/0/04/Hurricane_Isabel_from_ISS.jpg')",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					position: "relative"
				}}
			>
				<AppBar position="static"
					sx={{
						backgroundColor: `${theme.appbar.backgroundColor}`,
						borderBottom: `2px solid ${theme.border.color}`
					}}
				>
					<CardHeader
						avatar={
							null
						}
						title={
							<Typography variant="h5"
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									letterSpacing: ".18rem",
									color: "white",
									fontWeight: "bold",
								}}
							>
								Hurricane Tracker
							</Typography>
						}
					/>
				</AppBar>
				<Grid container sx={{ margin: "auto", width: "98%", mt: "20px" }}>
					<Grid xs={9}>
						<Box
							sx={{
								backgroundColor: `${theme.card.backgroundColor}`,
								border: `2px solid ${theme.border.color}`,
								borderRadius: "5px",
								mr: "20px",
								p: 2
							}}
						>

						</Box>
					</Grid>
					<Grid xs={3}>
						<Box
							sx={{
								backgroundColor: `${theme.card.backgroundColor}`,
								border: `2px solid ${theme.border.color}`,
								borderRadius: "5px",
								p: 2
							}}
						>

						</Box>
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	)

}

export default App