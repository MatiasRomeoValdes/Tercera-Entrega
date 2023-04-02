const dolar = document.getElementById('dolar')
const uf = document.getElementById('uf')


dolar.addEventListener('click', function() {
  let url = new URL( "https://mindicador.cl/api/bitcoin" )

})


    const indicadorBitcoin = async () => {
      const url = new URL( "https://mindicador.cl/api/bitcoin" )
    
      const fetchResponse = await fetch( url )
    
      const data = await fetchResponse.json()
    
      return data
    }
    


export default indicadorBitcoin

