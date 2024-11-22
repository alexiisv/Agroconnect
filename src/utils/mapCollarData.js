export function mapCollarData (data) {
  return {
    __aid_vaca: data.aid_vaca,
    
    Dioxido_de_Carbono: data.co2,
    Temperatura: data.temp,
    Humedad: data.hum,
  
    __received_at: new Date(data.received_at)
  }
}
