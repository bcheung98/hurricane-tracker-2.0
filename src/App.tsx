import { Box, AppBar, CardHeader, Avatar, Typography } from "@mui/material"

const App = () => {

	return (
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
					borderBottom: "2px solid white"
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
								letterSpacing: ".3rem",
								color: "white",
								fontWeight: "bold",
							}}
						>
							Hurricane Tracker
						</Typography>
					}
				/>
			</AppBar>
		</Box>
	)

}

export default App