-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.18-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para db_cetpro_jfsc
CREATE DATABASE IF NOT EXISTS `db_cetpro_jfsc` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `db_cetpro_jfsc`;

-- Volcando estructura para tabla db_cetpro_jfsc.alumno
CREATE TABLE IF NOT EXISTS `alumno` (
  `id_alumno` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo_doc_identidad` int(11) DEFAULT NULL,
  `id_grado_instruccion` int(11) DEFAULT NULL,
  `id_estado_civil` int(11) DEFAULT NULL,
  `id_distrito` int(11) DEFAULT NULL,
  `nombres` varchar(250) DEFAULT NULL,
  `apellido_paterno` varchar(100) DEFAULT NULL,
  `apellido_materno` varchar(100) DEFAULT NULL,
  `numero_documento` varchar(50) DEFAULT NULL,
  `sexo` char(1) DEFAULT NULL COMMENT 'F=Femenino, M=Masculino, O=Otros',
  `fecha_nacimiento` date DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `correo` varchar(250) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_alumno`),
  KEY `FK__tipo_documento_identidad` (`id_tipo_doc_identidad`),
  KEY `FK__grado_instruccion` (`id_grado_instruccion`),
  KEY `FK__estado_civil` (`id_estado_civil`),
  KEY `FK__distrito` (`id_distrito`),
  CONSTRAINT `FK__distrito` FOREIGN KEY (`id_distrito`) REFERENCES `distrito` (`id_distrito`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__estado_civil` FOREIGN KEY (`id_estado_civil`) REFERENCES `estado_civil` (`id_estado_civil`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__grado_instruccion` FOREIGN KEY (`id_grado_instruccion`) REFERENCES `grado_instruccion` (`id_grado_instruccion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__tipo_documento_identidad` FOREIGN KEY (`id_tipo_doc_identidad`) REFERENCES `tipo_documento_identidad` (`id_tipo_doc_identidad`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.alumno: ~3 rows (aproximadamente)
INSERT INTO `alumno` (`id_alumno`, `id_tipo_doc_identidad`, `id_grado_instruccion`, `id_estado_civil`, `id_distrito`, `nombres`, `apellido_paterno`, `apellido_materno`, `numero_documento`, `sexo`, `fecha_nacimiento`, `fecha_registro`, `direccion`, `telefono`, `correo`, `estado`) VALUES
	(1, 1, 5, 1, 3, 'ALICIA ESMERALDA', 'CERNA', 'PAJUELO', '71489398', 'F', '1999-09-03', '2022-11-24', 'Av. Horacio Urteaga 1039', '910360103', 'acerna@gmail.com', 1),
	(2, 1, 1, 1, 1, 'PAMELA', 'ROJAS', 'LOPEZ', '48488888', 'F', '1996-08-25', '2022-11-27', '', '', '', 1),
	(3, 1, 1, 1, 1, 'JULIO', 'PAREDES', 'CASAS', '86904044', 'M', '1992-06-25', '2022-11-27', '', '', '', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.ciclo
CREATE TABLE IF NOT EXISTS `ciclo` (
  `id_ciclo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_ciclo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.ciclo: ~3 rows (aproximadamente)
INSERT INTO `ciclo` (`id_ciclo`, `nombre`, `estado`) VALUES
	(1, 'BASICO', 1),
	(2, 'INTERMEDIO', 1),
	(3, 'AVANZADO', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.departamenteo
CREATE TABLE IF NOT EXISTS `departamenteo` (
  `id_departamento` int(11) NOT NULL AUTO_INCREMENT,
  `id_pais` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_departamento`),
  KEY `FK__pais` (`id_pais`),
  CONSTRAINT `FK__pais` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.departamenteo: ~1 rows (aproximadamente)
INSERT INTO `departamenteo` (`id_departamento`, `id_pais`, `nombre`, `estado`) VALUES
	(1, 1, 'LIMA', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.distrito
CREATE TABLE IF NOT EXISTS `distrito` (
  `id_distrito` int(11) NOT NULL AUTO_INCREMENT,
  `id_provincia` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_distrito`),
  KEY `FK__provincia` (`id_provincia`),
  CONSTRAINT `FK__provincia` FOREIGN KEY (`id_provincia`) REFERENCES `provincia` (`id_provincia`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.distrito: ~3 rows (aproximadamente)
INSERT INTO `distrito` (`id_distrito`, `id_provincia`, `nombre`, `estado`) VALUES
	(1, 1, 'LIMA', 1),
	(2, 1, 'LURÍN', 1),
	(3, 1, 'JESUS MARÍA', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.docente
CREATE TABLE IF NOT EXISTS `docente` (
  `id_docente` int(11) NOT NULL AUTO_INCREMENT,
  `nombres_apellido` varchar(250) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_docente`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.docente: ~9 rows (aproximadamente)
INSERT INTO `docente` (`id_docente`, `nombres_apellido`, `estado`) VALUES
	(1, 'Alicia Cerna', 1),
	(2, 'Luis Rodriguez vaswue', 0),
	(3, 'Juan Pablo Reyes', 1),
	(4, 'Juana Rosas', 1),
	(5, 'Juan Adolfo', 1),
	(6, 'Pruebas', 1),
	(7, 'Alicia Cerna', 1),
	(8, 'Juan Pablo Reyes Primerio', 1),
	(9, 'Antuane Parenes', 0);

-- Volcando estructura para tabla db_cetpro_jfsc.docente_asignacion
CREATE TABLE IF NOT EXISTS `docente_asignacion` (
  `id_docente` int(11) DEFAULT NULL,
  `id_familia_profesional` int(11) DEFAULT NULL,
  `id_opcion_ocupacional` int(11) DEFAULT NULL,
  `id_modulo` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  KEY `FK_docente_asignacion_docente` (`id_docente`),
  KEY `FK_docente_asignacion_familia_profesional` (`id_familia_profesional`),
  KEY `FK_docente_asignacion_opcion_ocupacional` (`id_opcion_ocupacional`),
  KEY `FK_docente_asignacion_modulo` (`id_modulo`),
  CONSTRAINT `FK_docente_asignacion_docente` FOREIGN KEY (`id_docente`) REFERENCES `docente` (`id_docente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_docente_asignacion_familia_profesional` FOREIGN KEY (`id_familia_profesional`) REFERENCES `familia_profesional` (`id_familia_profesional`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_docente_asignacion_modulo` FOREIGN KEY (`id_modulo`) REFERENCES `modulo` (`id_modulo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_docente_asignacion_opcion_ocupacional` FOREIGN KEY (`id_opcion_ocupacional`) REFERENCES `opcion_ocupacional` (`id_opcion_ocupacional`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.docente_asignacion: ~9 rows (aproximadamente)
INSERT INTO `docente_asignacion` (`id_docente`, `id_familia_profesional`, `id_opcion_ocupacional`, `id_modulo`, `fecha`, `estado`) VALUES
	(1, 2, 1, 2, '2022-11-20', 1),
	(2, 2, 1, 2, '2022-11-20', 1),
	(3, 4, 4, 4, '2022-11-22', 1),
	(4, 7, 6, 6, '2022-11-22', 1),
	(5, 4, 4, 4, '2022-11-22', 1),
	(6, 4, 4, 4, '2022-11-22', 1),
	(7, 4, 4, 5, '2022-11-22', 1),
	(8, 7, 6, 9, '2022-11-22', 1),
	(9, 7, 6, 9, '2022-11-22', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.estado_civil
CREATE TABLE IF NOT EXISTS `estado_civil` (
  `id_estado_civil` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_estado_civil`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.estado_civil: ~4 rows (aproximadamente)
INSERT INTO `estado_civil` (`id_estado_civil`, `descripcion`, `estado`) VALUES
	(1, 'SOLTERO', 1),
	(2, 'CASADO', 1),
	(3, 'DIVORCIADO', 1),
	(4, 'VIUDO', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.familia_profesional
CREATE TABLE IF NOT EXISTS `familia_profesional` (
  `id_familia_profesional` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(250) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_familia_profesional`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.familia_profesional: ~7 rows (aproximadamente)
INSERT INTO `familia_profesional` (`id_familia_profesional`, `nombre`, `descripcion`, `imagen`, `estado`) VALUES
	(1, 'Diseño', 'Diseño - I', NULL, 0),
	(2, 'Diseño', 'Diseño - II', NULL, 0),
	(3, 'asdas', 'dasdasdas', NULL, 0),
	(4, 'Diseño I', 'Emprendimiento II', NULL, 1),
	(5, 'asdasd', 'asdasdas', NULL, 0),
	(6, 'asdasd', 'sadsadasd', NULL, 0),
	(7, 'Diseño II', 'Emprendimiento I', NULL, 1);

-- Volcando estructura para tabla db_cetpro_jfsc.grado_instruccion
CREATE TABLE IF NOT EXISTS `grado_instruccion` (
  `id_grado_instruccion` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(250) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_grado_instruccion`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.grado_instruccion: ~5 rows (aproximadamente)
INSERT INTO `grado_instruccion` (`id_grado_instruccion`, `descripcion`, `estado`) VALUES
	(1, 'Secundaria', 1),
	(2, 'Tecnico Superior Incompleto', 1),
	(3, 'Tecnico Superior Completo', 1),
	(4, 'Universidad Incompleto', 1),
	(5, 'Universidad Completo', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.matricula
CREATE TABLE IF NOT EXISTS `matricula` (
  `id_matricula` int(11) NOT NULL AUTO_INCREMENT,
  `id_alumno` int(11) DEFAULT NULL,
  `id_modulo` int(11) DEFAULT NULL,
  `id_docente` int(11) DEFAULT NULL,
  `id_seccion` int(11) DEFAULT NULL,
  `duracion` varchar(50) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_termino` date DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `fecha_registro` datetime DEFAULT NULL,
  PRIMARY KEY (`id_matricula`),
  KEY `FK__alumno` (`id_alumno`),
  KEY `FK__docente` (`id_docente`),
  KEY `FK__seccion` (`id_seccion`),
  KEY `FK_matricula_modulo` (`id_modulo`),
  CONSTRAINT `FK__alumno` FOREIGN KEY (`id_alumno`) REFERENCES `alumno` (`id_alumno`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__docente` FOREIGN KEY (`id_docente`) REFERENCES `docente` (`id_docente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__seccion` FOREIGN KEY (`id_seccion`) REFERENCES `seccion` (`id_seccion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_matricula_modulo` FOREIGN KEY (`id_modulo`) REFERENCES `modulo` (`id_modulo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.matricula: ~6 rows (aproximadamente)
INSERT INTO `matricula` (`id_matricula`, `id_alumno`, `id_modulo`, `id_docente`, `id_seccion`, `duracion`, `fecha_inicio`, `fecha_termino`, `estado`, `fecha_registro`) VALUES
	(1, 1, 5, 7, 1, '34', '2022-11-27', '2022-12-02', 1, '2022-11-27 08:33:19'),
	(2, 1, 5, 7, 1, '34', '2022-12-10', '2022-11-24', 0, '2022-11-27 08:44:53'),
	(3, 1, 5, 7, 1, '34', '2022-12-09', '2023-01-05', 0, '2022-11-27 08:52:04'),
	(4, 1, 5, 8, 5, '34', '2022-11-27', '2022-12-30', 1, '2022-11-27 09:02:05'),
	(5, 1, 5, 8, 5, '34', '2022-11-27', '2023-01-27', 1, '2022-11-27 09:33:20'),
	(6, 3, 5, 7, 1, '34', '2022-12-07', '2023-01-06', 1, '2022-11-27 13:52:12');

-- Volcando estructura para tabla db_cetpro_jfsc.matricula_requisito
CREATE TABLE IF NOT EXISTS `matricula_requisito` (
  `id_matricula` int(11) DEFAULT NULL,
  `id_requisito` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL COMMENT '0=No entrego; 1=Entregado',
  KEY `FK__matricula` (`id_matricula`),
  KEY `FK__requisito` (`id_requisito`),
  CONSTRAINT `FK__matricula` FOREIGN KEY (`id_matricula`) REFERENCES `matricula` (`id_matricula`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__requisito` FOREIGN KEY (`id_requisito`) REFERENCES `requisito` (`id_requisito`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.matricula_requisito: ~24 rows (aproximadamente)
INSERT INTO `matricula_requisito` (`id_matricula`, `id_requisito`, `estado`) VALUES
	(1, 1, 0),
	(1, 2, 0),
	(1, 3, 0),
	(1, 4, 0),
	(2, 1, 0),
	(2, 2, 1),
	(2, 3, 1),
	(2, 4, 0),
	(3, 1, 0),
	(3, 2, 0),
	(3, 3, 0),
	(3, 4, 0),
	(5, 1, 0),
	(5, 2, 0),
	(5, 3, 0),
	(5, 4, 0),
	(4, 1, 1),
	(4, 2, 1),
	(4, 3, 1),
	(4, 4, 1),
	(6, 1, 1),
	(6, 2, 0),
	(6, 3, 0),
	(6, 4, 1);

-- Volcando estructura para tabla db_cetpro_jfsc.modulo
CREATE TABLE IF NOT EXISTS `modulo` (
  `id_modulo` int(11) NOT NULL AUTO_INCREMENT,
  `id_familia_profesional` int(11) DEFAULT NULL,
  `id_opcion_ocupacional` int(11) DEFAULT NULL,
  `nombre` varchar(250) NOT NULL DEFAULT '',
  `porcentaje_fe` int(11) NOT NULL,
  `porcentaje_fc` int(11) NOT NULL,
  `porcentaje_ppp` int(11) NOT NULL,
  `horas` varchar(50) NOT NULL DEFAULT '',
  `estado` int(11) NOT NULL,
  PRIMARY KEY (`id_modulo`),
  KEY `FK_mod_familia_profesional` (`id_familia_profesional`),
  KEY `FK_modulo_opcion_ocupacional` (`id_opcion_ocupacional`),
  CONSTRAINT `FK_mod_familia_profesional` FOREIGN KEY (`id_familia_profesional`) REFERENCES `familia_profesional` (`id_familia_profesional`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_modulo_opcion_ocupacional` FOREIGN KEY (`id_opcion_ocupacional`) REFERENCES `opcion_ocupacional` (`id_opcion_ocupacional`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.modulo: ~7 rows (aproximadamente)
INSERT INTO `modulo` (`id_modulo`, `id_familia_profesional`, `id_opcion_ocupacional`, `nombre`, `porcentaje_fe`, `porcentaje_fc`, `porcentaje_ppp`, `horas`, `estado`) VALUES
	(2, 2, 1, 'Colores  Primarios', 0, 0, 0, '30', 1),
	(3, 2, 1, 'Espacio', 0, 0, 0, '30', 0),
	(4, 4, 4, 'asdasdas', 0, 0, 0, 'dsadsa', 0),
	(5, 4, 4, 'Colores vivos', 0, 0, 0, '34', 1),
	(6, 7, 6, 'Antiguoo', 0, 0, 0, '23', 0),
	(8, 4, 4, 'Naranja', 0, 0, 0, '2', 0),
	(9, 7, 6, 'Rojo', 0, 0, 0, '23', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.opcion_ocupacional
CREATE TABLE IF NOT EXISTS `opcion_ocupacional` (
  `id_opcion_ocupacional` int(11) NOT NULL AUTO_INCREMENT,
  `id_familia_profesional` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_opcion_ocupacional`),
  KEY `FK__familia_profesional` (`id_familia_profesional`),
  CONSTRAINT `FK__familia_profesional` FOREIGN KEY (`id_familia_profesional`) REFERENCES `familia_profesional` (`id_familia_profesional`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.opcion_ocupacional: ~6 rows (aproximadamente)
INSERT INTO `opcion_ocupacional` (`id_opcion_ocupacional`, `id_familia_profesional`, `nombre`, `estado`) VALUES
	(1, 2, 'Diseño -III', 0),
	(2, 2, 'Estudio de colores', 1),
	(3, 2, 'Estudio de colores', 0),
	(4, 4, 'Colores Primarios', 1),
	(5, 7, 'Belleza paisajista', 1),
	(6, 7, 'Renacentista', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.pais
CREATE TABLE IF NOT EXISTS `pais` (
  `id_pais` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pais`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.pais: ~1 rows (aproximadamente)
INSERT INTO `pais` (`id_pais`, `nombre`, `estado`) VALUES
	(1, 'PERÚ', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.provincia
CREATE TABLE IF NOT EXISTS `provincia` (
  `id_provincia` int(11) NOT NULL AUTO_INCREMENT,
  `id_departamento` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_provincia`),
  KEY `FK__departamenteo` (`id_departamento`),
  CONSTRAINT `FK__departamenteo` FOREIGN KEY (`id_departamento`) REFERENCES `departamenteo` (`id_departamento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.provincia: ~1 rows (aproximadamente)
INSERT INTO `provincia` (`id_provincia`, `id_departamento`, `nombre`, `estado`) VALUES
	(1, 1, 'LIMA', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.requisito
CREATE TABLE IF NOT EXISTS `requisito` (
  `id_requisito` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_requisito`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.requisito: ~4 rows (aproximadamente)
INSERT INTO `requisito` (`id_requisito`, `descripcion`, `estado`) VALUES
	(1, 'Copia de DNI', 1),
	(2, '4 Fotos carnet', 1),
	(3, '1 Mica A4', 1),
	(4, 'Donación', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.rol
CREATE TABLE IF NOT EXISTS `rol` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.rol: ~1 rows (aproximadamente)
INSERT INTO `rol` (`id_rol`, `descripcion`, `estado`) VALUES
	(1, 'ADMIN', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.seccion
CREATE TABLE IF NOT EXISTS `seccion` (
  `id_seccion` int(11) NOT NULL AUTO_INCREMENT,
  `id_turno` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `id_ciclo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_seccion`),
  KEY `FK__turno` (`id_turno`),
  KEY `FK_seccion_ciclo` (`id_ciclo`),
  CONSTRAINT `FK__turno` FOREIGN KEY (`id_turno`) REFERENCES `turno` (`id_turno`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_seccion_ciclo` FOREIGN KEY (`id_ciclo`) REFERENCES `ciclo` (`id_ciclo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.seccion: ~7 rows (aproximadamente)
INSERT INTO `seccion` (`id_seccion`, `id_turno`, `nombre`, `estado`, `id_ciclo`) VALUES
	(1, 1, 'S1001', 1, 1),
	(2, 1, 'S1002', 1, 1),
	(3, 2, 'S1003', 1, 1),
	(4, 2, 'S1004', 1, 1),
	(5, 1, 'S2001', 1, 2),
	(6, 2, 'S2002', 1, 2),
	(7, 2, 'S3001', 1, 3);

-- Volcando estructura para tabla db_cetpro_jfsc.tipo_documento_identidad
CREATE TABLE IF NOT EXISTS `tipo_documento_identidad` (
  `id_tipo_doc_identidad` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(250) DEFAULT NULL,
  `descripcion_corta` varchar(50) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_tipo_doc_identidad`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.tipo_documento_identidad: ~2 rows (aproximadamente)
INSERT INTO `tipo_documento_identidad` (`id_tipo_doc_identidad`, `descripcion`, `descripcion_corta`, `estado`) VALUES
	(1, 'DOCUMENTO NACIONAL DE IDENTIDAD', 'DNI', 1),
	(2, 'CARNET DE EXTRANJERIA', 'CARNET EXT.', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.turno
CREATE TABLE IF NOT EXISTS `turno` (
  `id_turno` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_turno`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.turno: ~2 rows (aproximadamente)
INSERT INTO `turno` (`id_turno`, `descripcion`, `estado`) VALUES
	(1, 'Noche', 1),
	(2, 'Diurno', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(250) DEFAULT NULL,
  `apellido_paterno` varchar(100) DEFAULT NULL,
  `apellido_materno` varchar(100) DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `clave` varchar(250) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL COMMENT '0=deshabilitado, 1= habilitado',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.usuario: ~5 rows (aproximadamente)
INSERT INTO `usuario` (`id_usuario`, `nombres`, `apellido_paterno`, `apellido_materno`, `usuario`, `clave`, `estado`) VALUES
	(1, 'Alicia', 'Cerna', 'Pajuelo', 'acerna', '$2a$10$kORJP5EIJb.CUQKQ3s7UnONxY7a/tvowDlTlKiwqLCaVJ2peoWpsO', 1),
	(2, 'Monika', 'Ruiz', 'Pando', 'mruiz', '$2a$10$kORJP5EIJb.CUQKQ3s7UnONxY7a/tvowDlTlKiwqLCaVJ2peoWpsO', 1),
	(3, 'Administrador', ' ', ' ', 'administrador', '$2a$10$SRMdVp5OX591drag.zW2MOJL/s.PP3Z.rrSIcBxElC/XBFSHY4BYi', 1),
	(4, 'Secretaria', ' ', ' ', 'secretaria', '$2a$10$INgdhgmKyuSM7rYp/0uuCOqrIpfVO8n9dT1Q4epdk0TvHjwYYq1gm', 1),
	(5, 'Director', ' ', ' ', 'director', '$2a$10$k9jZPbi1y4/QAX7YYz44PeluILKFbn43Pa8E6Z/PnwYT6sBt4zZea', 1);

-- Volcando estructura para tabla db_cetpro_jfsc.usuario_rol
CREATE TABLE IF NOT EXISTS `usuario_rol` (
  `id_rol` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  KEY `FK__rol` (`id_rol`),
  KEY `FK__usuario` (`id_usuario`),
  CONSTRAINT `FK__rol` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_cetpro_jfsc.usuario_rol: ~2 rows (aproximadamente)
INSERT INTO `usuario_rol` (`id_rol`, `id_usuario`, `estado`) VALUES
	(1, 1, 1),
	(1, 2, 1);

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_alumno_listar_x_dni
DELIMITER //
CREATE PROCEDURE `_sp_alumno_listar_x_dni`(
	IN `in_numero` VARCHAR(50)
)
BEGIN
SELECT
a.id_alumno,
a.id_tipo_doc_identidad,
a.id_grado_instruccion,
a.id_estado_civil,
a.id_distrito,
a.nombres,
a.apellido_paterno,
a.apellido_materno,
a.numero_documento,
a.sexo,
DATE_FORMAT(a.fecha_nacimiento, '%d-%m-%Y') AS fecha_nacimiento,
a.direccion,
a.telefono,
a.correo
FROM alumno a
WHERE a.estado = 1
AND a.numero_documento = in_numero;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_alumno_registrar
DELIMITER //
CREATE PROCEDURE `_sp_alumno_registrar`(
	IN `id_alumno` INT,
	IN `id_tipo_doc_identidad` INT,
	IN `id_grado_instruccion` INT,
	IN `id_estado_civil` INT,
	IN `id_distrito` INT,
	IN `nombres` VARCHAR(250),
	IN `apellido_paterno` VARCHAR(250),
	IN `apellido_materno` VARCHAR(250),
	IN `sexo` VARCHAR(50),
	IN `fecha_nacimiento` DATE,
	IN `direccion` VARCHAR(250),
	IN `telefono` VARCHAR(50),
	IN `correo` VARCHAR(50),
	IN `nro_documento` VARCHAR(50)
)
BEGIN
INSERT INTO alumno
(id_tipo_doc_identidad,id_grado_instruccion,id_estado_civil,
id_distrito,nombres,apellido_paterno,apellido_materno,numero_documento,
sexo,fecha_nacimiento,fecha_registro,direccion,telefono,correo,estado)
VALUES
(id_tipo_doc_identidad,id_grado_instruccion,id_estado_civil,id_distrito,
nombres,apellido_paterno,apellido_materno,nro_documento,sexo,fecha_nacimiento,NOW(),direccion,telefono,correo,1);
SET @val_codigo =  LAST_INSERT_ID();
SELECT @val_codigo AS id_alumno;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_ciclo_listar
DELIMITER //
CREATE PROCEDURE `_sp_ciclo_listar`()
BEGIN
SELECT
c.id_ciclo,
c.nombre
FROM ciclo c
WHERE c.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_dash_matricula_x_donaciones
DELIMITER //
CREATE PROCEDURE `_sp_dash_matricula_x_donaciones`()
BEGIN

SELECT 
concat(MONTH(date_format(m.fecha_registro,'%Y-%m-%d')),'') AS mes,
COUNT(m.id_matricula) AS cantidad
FROM
matricula m
INNER JOIN matricula_requisito mr
ON mr.id_matricula = m.id_matricula
AND mr.id_requisito = 4 AND 
mr.estado = 1
GROUP BY 1;

END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_dash_matricula_x_edad
DELIMITER //
CREATE PROCEDURE `_sp_dash_matricula_x_edad`()
BEGIN
SELECT 
concat(TIMESTAMPDIFF(YEAR, a.fecha_nacimiento , DATE_FORMAT(NOW(), '%Y-%m-%d')),' años') AS edad,
COUNT(m.id_matricula) AS cantidad
FROM
matricula m
INNER JOIN alumno a
ON a.id_alumno = m.id_alumno
WHERE m.estado = 1
GROUP BY 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_dash_matricula_x_genero
DELIMITER //
CREATE PROCEDURE `_sp_dash_matricula_x_genero`()
BEGIN
SELECT 
a.sexo AS sexo,
COUNT(m.id_matricula) AS cantidad
FROM
matricula m
INNER JOIN alumno a
ON a.id_alumno = m.id_alumno
WHERE m.estado = 1
GROUP BY a.sexo;

END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_dash_matricula_x_modulo
DELIMITER //
CREATE PROCEDURE `_sp_dash_matricula_x_modulo`()
BEGIN
SELECT 
mo.nombre AS modulo,
COUNT(m.id_matricula) AS cantidad
FROM
matricula m
INNER JOIN modulo mo
ON mo.id_modulo = m.id_modulo
WHERE m.estado = 1
GROUP BY mo.nombre;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_departamento_listar
DELIMITER //
CREATE PROCEDURE `_sp_departamento_listar`(
	IN `in_pais` INT
)
BEGIN
SELECT
d.id_departamento,
d.nombre
FROM departamenteo d
WHERE d.estado= 1
AND d.id_pais = in_pais;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_distrito_listar
DELIMITER //
CREATE PROCEDURE `_sp_distrito_listar`(
	IN `in_provincia` INT
)
BEGIN
SELECT
d.id_distrito,
d.nombre
FROM 
distrito d
WHERE d.id_provincia = in_provincia
AND d.estado= 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_docente_eliminar
DELIMITER //
CREATE PROCEDURE `_sp_docente_eliminar`(
	IN `in_codigo` INT
)
BEGIN
UPDATE docente
SET estado = 0
WHERE id_docente = in_codigo;
SELECT in_codigo AS id_docente;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_docente_listar
DELIMITER //
CREATE PROCEDURE `_sp_docente_listar`()
BEGIN
SELECT
d.id_docente,
d.nombres_apellido,
da.id_familia_profesional,
da.id_opcion_ocupacional,
da.id_modulo,
m.nombre AS modulo,
fp.nombre AS familia_profesional,
oo.nombre AS opcion_ocupacional
FROM docente d
INNER JOIN docente_asignacion da
ON da.id_docente = d.id_docente
INNER JOIN familia_profesional fp
ON fp.id_familia_profesional = da.id_familia_profesional
AND fp.estado = 1
INNER JOIN opcion_ocupacional oo
ON oo.id_opcion_ocupacional = da.id_opcion_ocupacional
AND oo.estado = 1
INNER JOIN modulo m
ON m.id_modulo = da.id_modulo
AND m.estado = 1
WHERE d.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_docente_modificar
DELIMITER //
CREATE PROCEDURE `_sp_docente_modificar`(
	IN `id` INT,
	IN `id_familia_profesional` INT,
	IN `id_opcion_ocupacional` INT,
	IN `id_modulo` INT,
	IN `nombres_apellido` VARCHAR(250)
)
BEGIN
UPDATE docente
SET nombres_apellido =nombres_apellido
WHERE id_docente = id;
UPDATE docente_asignacion
SET id_familia_profesional = id_familia_profesional,
id_opcion_ocupacional= id_opcion_ocupacional,
id_modulo= id_modulo
WHERE id_docente = id;
SELECT id AS id_docente;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_docente_registrar
DELIMITER //
CREATE PROCEDURE `_sp_docente_registrar`(
	IN `id` INT,
	IN `id_familia_profesional` INT,
	IN `id_opcion_ocupacional` INT,
	IN `id_modulo` INT,
	IN `nombres_apellido` VARCHAR(250)
)
BEGIN
INSERT INTO docente 
(nombres_apellido, estado)
VALUES
(nombres_apellido,1);
SET @val_codigo =  LAST_INSERT_ID();
INSERT INTO docente_asignacion
(id_docente,id_familia_profesional,id_opcion_ocupacional,id_modulo,fecha, estado)
VALUES
(@val_codigo,id_familia_profesional,id_opcion_ocupacional,id_modulo,NOW(),1);
SELECT @val_codigo AS id_docente;

END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_estado_civil_listar
DELIMITER //
CREATE PROCEDURE `_sp_estado_civil_listar`()
BEGIN
SELECT
ec.id_estado_civil,
ec.descripcion
FROM 
estado_civil ec
WHERE ec.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_familia_profesional_eliminar
DELIMITER //
CREATE PROCEDURE `_sp_familia_profesional_eliminar`(
	IN `in_codigo` INT
)
BEGIN
UPDATE familia_profesional
SET estado = 0
WHERE id_familia_profesional = in_codigo;
SELECT in_codigo AS id_familia_profesional;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_familia_profesional_listar
DELIMITER //
CREATE PROCEDURE `_sp_familia_profesional_listar`()
BEGIN
SELECT 
fp.id_familia_profesional,
fp.nombre,
fp.descripcion
FROM familia_profesional fp
WHERE fp.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_familia_profesional_modificar
DELIMITER //
CREATE PROCEDURE `_sp_familia_profesional_modificar`(
	IN `id` INT,
	IN `nombre` VARCHAR(50),
	IN `descripcion` VARCHAR(50),
	IN `imagen` VARCHAR(50)
)
BEGIN
UPDATE familia_profesional
SET 
nombre = nombre,
descripcion = descripcion
WHERE id_familia_profesional = id;
SELECT id AS id_familia_profesional;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_familia_profesional_registrar
DELIMITER //
CREATE PROCEDURE `_sp_familia_profesional_registrar`(
	IN `id` INT,
	IN `nombre` VARCHAR(50),
	IN `descripcion` VARCHAR(50),
	IN `imagen` VARCHAR(50)
)
BEGIN
INSERT INTO familia_profesional
(nombre, descripcion, estado)
VALUES
(nombre,descripcion,1);
SET @val_codigo =  LAST_INSERT_ID();
	SELECT @val_codigo AS id_familia_profesional;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_grado_instruccion_listar
DELIMITER //
CREATE PROCEDURE `_sp_grado_instruccion_listar`()
BEGIN
SELECT
gi.id_grado_instruccion,
gi.descripcion
FROM grado_instruccion gi
WHERE gi.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_matricula_eliminar
DELIMITER //
CREATE PROCEDURE `_sp_matricula_eliminar`(
	IN `in_codigo` INT
)
BEGIN
UPDATE matricula
SET estado = 0
WHERE id_matricula =  in_codigo;
SELECT in_codigo AS id_matricula;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_matricula_listar
DELIMITER //
CREATE PROCEDURE `_sp_matricula_listar`()
BEGIN

SELECT
m.id_matricula,
DATE_FORMAT(m.fecha_registro, '%d-%m-%Y') AS fecha_registro,
CONCAT(a.nombres,' ',a.apellido_paterno,' ',a.apellido_materno) AS nombre_apellido,
CONCAT(a.apellido_paterno,' ',a.apellido_materno, ' ',a.nombres) AS apellido_nombre,
fp.nombre AS especialidad,
mo.nombre AS modulo,
d.nombres_apellido AS docente,
a.numero_documento,
m.id_seccion,
mo.id_opcion_ocupacional AS id_opcion,
mo.id_familia_profesional AS id_familia,
s.id_ciclo,
m.id_modulo,
m.id_docente,
mo.horas,
a.id_alumno,
s.id_turno,
oo.nombre AS opcion,
t.descripcion AS turno,
cic.nombre AS ciclo,
DATE_FORMAT(m.fecha_inicio, '%Y-%m-%d') AS fecha_inicio,
DATE_FORMAT(m.fecha_termino, '%Y-%m-%d') AS fecha_termino
FROM
matricula m
INNER JOIN alumno a
ON a.id_alumno = m.id_alumno
AND a.estado = 1
INNER JOIN modulo mo
ON mo.id_modulo = m.id_modulo
AND mo.estado = 1
INNER JOIN opcion_ocupacional oo
ON oo.id_opcion_ocupacional = mo.id_opcion_ocupacional
AND oo.estado = 1
INNER JOIN familia_profesional fp
ON fp.id_familia_profesional = mo.id_familia_profesional
AND fp.estado = 1
INNER JOIN docente d
ON d.id_docente = m.id_docente
AND d.estado =1
INNER JOIN seccion s
ON s.id_seccion = m.id_seccion
AND s.estado= 1
INNER JOIN turno t
ON t.id_turno = s.id_turno
AND t.estado = 1
INNER JOIN ciclo cic
ON cic.id_ciclo =s.id_ciclo
AND cic.estado
WHERE m.estado = 1;

END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_matricula_listar_x_id
DELIMITER //
CREATE PROCEDURE `_sp_matricula_listar_x_id`(
	IN `in_codigo` INT
)
BEGIN

SELECT
m.id_matricula,
DATE_FORMAT(m.fecha_registro, '%d-%m-%Y') AS fecha_registro,
CONCAT(a.nombres,' ',a.apellido_paterno,' ',a.apellido_materno) AS nombre_apellido,
CONCAT(a.apellido_paterno,' ',a.apellido_materno, ' ',a.nombres) AS apellido_nombre,
fp.nombre AS especialidad,
mo.nombre AS modulo,
d.nombres_apellido AS docente,
a.numero_documento,
m.id_seccion,
mo.id_opcion_ocupacional AS id_opcion,
mo.id_familia_profesional AS id_familia,
s.id_ciclo,
m.id_modulo,
m.id_docente,
mo.horas,
a.id_alumno,
s.id_turno,
oo.nombre AS opcion,
t.descripcion AS turno,
cic.nombre AS ciclo,
DATE_FORMAT(m.fecha_inicio, '%Y-%m-%d') AS fecha_inicio,
DATE_FORMAT(m.fecha_termino, '%Y-%m-%d') AS fecha_termino,
a.apellido_paterno,
a.apellido_materno,
a.nombres AS alumno_nombre,
a.sexo,
a.direccion,
a.telefono,
a.correo,
eciv.descripcion AS estado_civil,
gi.descripcion AS grado,
dis.nombre AS distrito,
pro.nombre AS provincia,
dep.nombre AS departamento,
TIMESTAMPDIFF(YEAR, a.fecha_nacimiento , DATE_FORMAT(NOW(), '%Y-%m-%d')) AS edad
FROM
matricula m
INNER JOIN alumno a
ON a.id_alumno = m.id_alumno
AND a.estado = 1
INNER JOIN modulo mo
ON mo.id_modulo = m.id_modulo
AND mo.estado = 1
INNER JOIN opcion_ocupacional oo
ON oo.id_opcion_ocupacional = mo.id_opcion_ocupacional
AND oo.estado = 1
INNER JOIN familia_profesional fp
ON fp.id_familia_profesional = mo.id_familia_profesional
AND fp.estado = 1
INNER JOIN docente d
ON d.id_docente = m.id_docente
AND d.estado =1
INNER JOIN seccion s
ON s.id_seccion = m.id_seccion
AND s.estado= 1
INNER JOIN turno t
ON t.id_turno = s.id_turno
AND t.estado = 1
INNER JOIN ciclo cic
ON cic.id_ciclo =s.id_ciclo
AND cic.estado
INNER JOIN estado_civil eciv
ON eciv.id_estado_civil = a.id_estado_civil
INNER JOIN  grado_instruccion gi
ON gi.id_grado_instruccion = a.id_grado_instruccion
INNER JOIN distrito dis
ON dis.id_distrito = a.id_distrito
INNER JOIN provincia pro
ON pro.id_provincia = dis.id_provincia
INNER JOIN departamenteo dep
ON dep.id_departamento = pro.id_departamento
WHERE m.estado = 1
AND m.id_matricula = in_codigo;

END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_matricula_modificar
DELIMITER //
CREATE PROCEDURE `_sp_matricula_modificar`(
	IN `id` INT,
	IN `id_alumno` INT,
	IN `id_modulo` INT,
	IN `id_docente` INT,
	IN `id_seccion` INT,
	IN `duracion` VARCHAR(50),
	IN `fecha_inicio` DATE,
	IN `fecha_termino` DATE,
	IN `requisitos` TEXT
)
BEGIN
UPDATE matricula
SET id_alumno = id_alumno,
id_modulo = id_modulo,
id_docente = id_docente,
id_seccion =  id_seccion,
duracion =  duracion,
fecha_inicio = fecha_inicio,
fecha_termino = fecha_termino
WHERE id_matricula = id;
DELETE FROM matricula_requisito WHERE id_matricula = id;
SET @lista_requisito = REPLACE(requisitos,'@val_codigo', id);
PREPARE valores FROM  @lista_requisito;
EXECUTE valores;
deallocate prepare valores;

SELECT id AS id_matricula;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_matricula_registrar
DELIMITER //
CREATE PROCEDURE `_sp_matricula_registrar`(
	IN `id` INT,
	IN `id_alumno` INT,
	IN `id_modulo` INT,
	IN `id_docente` INT,
	IN `id_seccion` INT,
	IN `duracion` VARCHAR(50),
	IN `fecha_inicio` DATE,
	IN `fecha_termino` DATE,
	IN `requisitos` TEXT
)
BEGIN
INSERT INTO matricula
(id_alumno,id_modulo,id_docente,id_seccion,duracion,fecha_inicio,fecha_termino,estado,fecha_registro)
VALUES
(id_alumno,id_modulo,id_docente,id_seccion,duracion,fecha_inicio,fecha_termino,1,NOW());
SET @val_codigo =  LAST_INSERT_ID();
SET @lista_requisito = REPLACE(requisitos,'@val_codigo',@val_codigo);
PREPARE valores FROM  @lista_requisito;
EXECUTE valores;
deallocate prepare valores;

SELECT @val_codigo AS id_matricula;


END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_modulo_eliminar
DELIMITER //
CREATE PROCEDURE `_sp_modulo_eliminar`(
	IN `in_codigo` INT
)
BEGIN
UPDATE modulo
SET estado = 0
WHERE id_modulo = in_codigo;
SELECT in_codigo AS id_modulo;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_modulo_listar
DELIMITER //
CREATE PROCEDURE `_sp_modulo_listar`()
BEGIN
SELECT
m.id_modulo,
m.id_familia_profesional,
m.id_opcion_ocupacional,
m.nombre,
m.horas,
oo.nombre AS opcion_ocupacional,
fp.nombre AS familia_profesional
FROM modulo m
INNER JOIN familia_profesional fp
ON fp.id_familia_profesional = m.id_familia_profesional
AND fp.estado = 1
INNER JOIN opcion_ocupacional oo
ON oo.id_opcion_ocupacional =  m.id_opcion_ocupacional
AND oo.estado = 1
WHERE m.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_modulo_modificar
DELIMITER //
CREATE PROCEDURE `_sp_modulo_modificar`(
	IN `id` INT,
	IN `id_familia_profesional` INT,
	IN `id_opcion_ocupacional` INT,
	IN `nombre` VARCHAR(50),
	IN `horas` VARCHAR(50)
)
BEGIN
UPDATE modulo
SET id_familia_profesional = id_familia_profesional,
id_opcion_ocupacional =id_opcion_ocupacional,
nombre = nombre,
horas =horas
WHERE id_modulo = id;

SELECT id AS id_modulo;

END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_modulo_registrar
DELIMITER //
CREATE PROCEDURE `_sp_modulo_registrar`(
	IN `id` INT,
	IN `id_familia_profesional` INT,
	IN `id_opcion_ocupacional` INT,
	IN `nombre` VARCHAR(50),
	IN `horas` VARCHAR(50)
)
BEGIN
INSERT INTO modulo
(id_familia_profesional,id_opcion_ocupacional,nombre,horas,estado)
VALUES
(id_familia_profesional,id_opcion_ocupacional,nombre,horas,1);
SET @val_codigo =  LAST_INSERT_ID();
	SELECT @val_codigo AS id_modulo;

END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_opcion_ocupacional_eliminar
DELIMITER //
CREATE PROCEDURE `_sp_opcion_ocupacional_eliminar`(
	IN `in_codigo` INT
)
BEGIN
UPDATE opcion_ocupacional
SET estado = 0
WHERE id_opcion_ocupacional = in_codigo;
SELECT in_codigo AS id_opcion_ocupacional;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_opcion_ocupacional_listar
DELIMITER //
CREATE PROCEDURE `_sp_opcion_ocupacional_listar`()
BEGIN
SELECT 
oo.id_opcion_ocupacional,
oo.id_familia_profesional,
oo.nombre,
fp.nombre AS familia_profesional
FROM opcion_ocupacional oo
INNER JOIN familia_profesional fp
ON fp.id_familia_profesional = oo.id_familia_profesional
AND fp.estado = 1
WHERE oo.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_opcion_ocupacional_listar_x_familia
DELIMITER //
CREATE PROCEDURE `_sp_opcion_ocupacional_listar_x_familia`(
	IN `in_codigo` INT
)
BEGIN
SELECT 
oo.id_opcion_ocupacional,
oo.id_familia_profesional,
oo.nombre,
fp.nombre AS familia_profesional
FROM opcion_ocupacional oo
INNER JOIN familia_profesional fp
ON fp.id_familia_profesional = oo.id_familia_profesional
AND fp.estado = 1
WHERE oo.estado = 1
AND oo.id_familia_profesional = in_codigo;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_opcion_ocupacional_modificar
DELIMITER //
CREATE PROCEDURE `_sp_opcion_ocupacional_modificar`(
	IN `id` INT,
	IN `id_familia_profesional` INT,
	IN `nombre` VARCHAR(50)
)
BEGIN
UPDATE opcion_ocupacional
SET 
id_familia_profesional = id_familia_profesional,
nombre = nombre
WHERE id_opcion_ocupacional = id;
SELECT id AS id_opcion_ocupacional;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_opcion_ocupacional_registrar
DELIMITER //
CREATE PROCEDURE `_sp_opcion_ocupacional_registrar`(
	IN `id` INT,
	IN `id_familia_profesional` INT,
	IN `nombre` VARCHAR(50)
)
BEGIN
INSERT INTO opcion_ocupacional
(id_familia_profesional,nombre,estado)
VALUES
(id_familia_profesional,nombre,1);
SET @val_codigo =  LAST_INSERT_ID();
	SELECT @val_codigo AS id_opcion_ocupacional;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_pais_listar
DELIMITER //
CREATE PROCEDURE `_sp_pais_listar`()
BEGIN
SELECT 
p.id_pais,
p.nombre
FROM 
pais p
WHERE p.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_provincia_listar
DELIMITER //
CREATE PROCEDURE `_sp_provincia_listar`(
	IN `in_departamento` INT
)
BEGIN
SELECT
p.id_provincia,
p.nombre
FROM 
provincia p
WHERE p.estado = 1
AND p.id_departamento =  in_departamento;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_requisito_listar
DELIMITER //
CREATE PROCEDURE `_sp_requisito_listar`()
BEGIN
SELECT
r.id_requisito,
r.descripcion
FROM requisito r
WHERE r.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_requisito_listar_x_matricula
DELIMITER //
CREATE PROCEDURE `_sp_requisito_listar_x_matricula`(
	IN `in_codigo` INT
)
BEGIN
SELECT
r.id_requisito,
r.descripcion,
mr.estado
FROM
matricula_requisito mr
INNER JOIN requisito r
ON r.id_requisito = mr.id_requisito
WHERE mr.id_matricula = in_codigo;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_rol_listar
DELIMITER //
CREATE PROCEDURE `_sp_rol_listar`(
	IN `in_usuario` INT
)
BEGIN
SELECT r.descripcion FROM usuario_rol ur
INNER JOIN rol r
ON ur.id_rol =  r.id_rol
WHERE ur.id_usuario = in_usuario;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_seccion_listar
DELIMITER //
CREATE PROCEDURE `_sp_seccion_listar`(
	IN `in_turno` INT,
	IN `in_ciclo` INT
)
BEGIN
SELECT
s.id_seccion,
s.nombre
FROM seccion s
WHERE s.estado = 1
AND s.id_turno = in_turno
AND s.id_ciclo = in_ciclo;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_tipo_documento_listar
DELIMITER //
CREATE PROCEDURE `_sp_tipo_documento_listar`()
BEGIN
SELECT
tdi.id_tipo_doc_identidad,
tdi.descripcion_corta
FROM
tipo_documento_identidad tdi
WHERE tdi.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_turno_listar
DELIMITER //
CREATE PROCEDURE `_sp_turno_listar`()
BEGIN
SELECT
t.id_turno,
t.descripcion
FROM turno t
WHERE t.estado=1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_usuario_buscar_x_usuario
DELIMITER //
CREATE PROCEDURE `_sp_usuario_buscar_x_usuario`(
	IN `in_usuario` VARCHAR(50)
)
BEGIN
SELECT u.id_usuario,u.nombres, u.apellido_paterno,u.apellido_materno,u.usuario,u.clave
FROM usuario u
WHERE u.usuario = in_usuario
AND u.estado = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_cetpro_jfsc._sp_usuario_x_id
DELIMITER //
CREATE PROCEDURE `_sp_usuario_x_id`(
	IN `in_usuario` INT
)
BEGIN
SELECT 
u.id_usuario,
u.nombres,
u.apellido_paterno,
u.apellido_materno
FROM usuario u
WHERE u.usuario = in_usuario;
END//
DELIMITER ;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
