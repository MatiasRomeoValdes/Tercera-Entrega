const dolar = document.getElementById('dolar')
const uf = document.getElementById('uf')



    const indicadorEuro = async () => {
      const url = new URL( "https://mindicador.cl/api/euro" )
    
      const fetchResponse = await fetch( url )
    
      const data = await fetchResponse.json()
    
      return data
    }
    


export default indicadorEuro