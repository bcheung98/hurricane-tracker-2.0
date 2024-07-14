import { Box } from "@mui/material"

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
		</Box>
	)

}

export default App