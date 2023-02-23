import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  LIST_USUARIOS: Usuario[] = [
    {usuario: 'aAlejandro', nombre: 'Alejandro', apellido:'Agüero', sexo: 'Masculino'},
    {usuario: 'cLuciana', nombre: 'Luciana', apellido:'Carrizo', sexo: 'Femenino'},
    {usuario: 'fRomina', nombre: 'Romina', apellido:'Flores', sexo: 'Femenino'},
    {usuario: 'mAndres', nombre: 'Andres', apellido:'Martinez', sexo: 'Masculino'},
    {usuario: 'zRaul', nombre: 'Raul', apellido:'Zamorano', sexo: 'Masculino'},
    {usuario: 'jMarcos', nombre: 'Marcos', apellido:'Jiminez', sexo: 'Masculino'},
    {usuario: 'bEsteban', nombre: 'Esteban', apellido:'Brandan', sexo: 'Masculino'},
    {usuario: 'aMaria', nombre: 'Maria', apellido:'Armani', sexo: 'Femenino'},
    {usuario: 'bAndrea', nombre: 'Andrea', apellido:'Bustos', sexo: 'Femenino'},
    {usuario: 'vDaniela', nombre: 'Daniela', apellido:'Vega', sexo: 'Femenino'},
    {usuario: 'jMarcos', nombre: 'Marcos', apellido:'Jaimes', sexo: 'Masculino'},
    {usuario: 'gCesar', nombre: 'Cesar', apellido:'Garcia', sexo: 'Masculino'},

  ];

  constructor() { }

  getUsuarios() {
    return this.LIST_USUARIOS.slice();
  }

  eliminarUsuario(index: number){
    this.LIST_USUARIOS.splice(index,1);
  }
}
