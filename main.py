import pandas as pd
from Data.Platos import platospopulares
from Data.creartabla import CrearTabla
from Data.reservas import reservas
from Data.provedores import provedores

tablaPlatos =pd.DataFrame(platospopulares)
print(tablaPlatos)
CrearTabla(platospopulares,"tablaplatospopulares")

tablareservas =pd.DataFrame(reservas)
print(tablareservas)
CrearTabla(tablareservas,"tablareservas")

tablaprovedores =pd.DataFrame(provedores)
print(tablaprovedores)
CrearTabla(tablaprovedores,"tablaprovedores")