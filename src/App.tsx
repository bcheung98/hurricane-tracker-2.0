import { Box, Typography } from "@mui/material"

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
			<Box
				sx={{
					textAlign: "center",
					postion: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(40%, 255%)",
					color: "white",
					backgroundColor: "rgba(32, 32, 32, 0.5)",
					border: "2px solid silver",
					borderRadius: "5px",
					padding: "35px",
					width: "50vw"
				}}
			>
				<Typography variant="h2" fontWeight="bold">Hurricane Tracker</Typography>
			</Box>
		</Box>
	)

}

export default App