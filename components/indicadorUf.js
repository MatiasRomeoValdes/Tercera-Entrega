

    const indicadorUf = async () => {
      const url = new URL( "https://mindicador.cl/api/uf" )
    
      const fetchResponse = await fetch( url )
    
      const data = await fetchResponse.json()
    
      return data
    }
    


export default indicadorUf