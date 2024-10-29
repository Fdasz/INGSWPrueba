"use strict";
import { EntitySchema } from "typeorm";

const asistenciaSchema = new EntitySchema({
  name: "Asistencia",
  tableName: "asistencias",
  columns: {
    id_asistencia: {
        type: "int",
        primary: true,
        generated: true,
    },
    fecha: {
        type: "DATE",
        nullable: false,
    },
    hora_entrada: {
        type: "timestamp with time zone",
        default: () => "CURRENT_TIMESTAMP",
        nullable: false,
    },
    hora_salida: {
        type: "timestamp with time zone",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
        nullable: false,
    },
    rut_usuario: {
        type: "varchar",
        length: 12,
        nullable: false,
        unique: true,
        }
    },
    relations:{
        usuario:{
            type: "many-to-one",
            target: "User",
            joinColumn: {name:"rut_usuario", referenceColumnName:"rut"}
        }
    }
});

export default asistenciaSchema
