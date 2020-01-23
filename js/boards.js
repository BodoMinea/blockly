﻿'use strict';

goog.provide('Blockly.Arduino');
goog.require('Blockly.Generator');

var profile = {
	microbit: {
	    description: "micro:bit",
	    BUILTIN_LED: 2,
		picture : "media/microbit.jpg",
		dropdownPWM: [["P0", "pin0"],["P1", "pin1"],["P2", "pin2"],["P3", "pin3"],["P4", "pin4"],["P5", "pin5"],["P6", "pin6"],["P7", "pin7"],["P8", "pin8"],["P9", "pin9"],["P10", "pin10"],["P11", "pin11"],["P12", "pin12"],["P13", "pin13"],["P14", "pin14"],["P15", "pin15"],["P16", "pin16"],["P19", "pin19"],["P20", "pin20"]],
		dropdownAnalog: [["P0", "pin0"],["P1", "pin1"],["P2", "pin2"],["P3", "pin3"],["P4", "pin4"],["P10", "pin10"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		cpu: "cortexM0",
		speed: "115200",
		prog: "python",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "20"
	},
	esp32: {
	    description: "ESP32",
	    BUILTIN_LED: 2,
		picture : "media/esp32.jpg",
		dropdownPWM: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		dropdownAnalog: [["A0", "A0"]],
		interrupt: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		cpu: "esp32",
		speed: "115200",
		prog: "python",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "34"
	},
	esp8266: {
	    description: "ESP8266",
	    BUILTIN_LED: 2,
		picture : "media/esp8266.jpg",
		dropdownPWM: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		dropdownAnalog: [["A0", "A0"]],
		interrupt: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		cpu: "esp8266",
		speed: "115200",
		prog: "python",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "11"
	},
	pyboard: {
	    description: "pyBoard",
	    BUILTIN_LED: 2,
		picture : "media/pyboard.jpg",
		dropdownPWM: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		dropdownAnalog: [["A0", "0"]],
		interrupt: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		cpu: "cortexM4",
		speed: "115200",
		prog: "python",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "29"
	},
	pro8: {
	    description: "Arduino Pro Mini 3.3V atMega328",
	    BUILTIN_LED: 13,
		picture : "media/pro.jpg",
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "pro8",
		cpu: "atmega328p",
		speed: "57600",
		prog: "arduino",
		usb: "",
		voltage: "3,3V",
		inout: "20"
	},
	pro16: {
	    description: "Dagu RS040 / Pro ou Pro Mini",
	    BUILTIN_LED: 13,
		picture : "media/rs040.jpg",
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "pro16",
		cpu: "atmega328p",
		speed: "57600",
		prog: "arduino",
		usb: "mini USB",
		voltage: "5V",
		inout: "20",
		usb: "mini USB",
		voltage: "5V",
		inout: "20"
	},
	atmegang: {
	    description: "Dagu rs027",
	    BUILTIN_LED: 13,
		picture : "media/rs027.png",
		dropdownPWM: [["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "atmegang",
		cpu: "atmega8",
		speed: "19200",
		prog: "arduino",
		usb: "mini USB",
		voltage: "5V",
		inout: "20"
	},
	nano: {
	    description: "Arduino Nano (Old Bootloader)",
	    BUILTIN_LED: 13,
		picture : "media/nano.jpg",
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "nano",
		cpu: "atmega328p",
		speed: "57600",
		prog: "arduino",
		usb: "mini USB",
		voltage: "5V",
		inout: "20"
	},
	nanooptiboot: {
	    description: "Arduino Nano",
	    BUILTIN_LED: 13,
		picture : "media/nano.jpg",
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "nanooptiboot",
		cpu: "atmega328p",
		speed: "115200",
		prog: "arduino",
		usb: "mini USB",
		voltage: "5V",
		inout: "20"
	},
	mini: {
	    description: "Arduino Mini",
	    BUILTIN_LED: 13,
		picture : "media/mini.jpg",
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "mini",
		cpu: "atmega328p",
		speed: "115200",
		prog: "arduino",
		usb: "",
		voltage: "5V",
		inout: "20"
	},
	micro: {
	    description: "Arduino Micro",
	    BUILTIN_LED: 13,
		picture : "media/micro.jpg",
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"], ["13", "13"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6(4)", "4"], ["A7(6)", "6"], ["A8(8)", "8"], ["A9(9)", "9"], ["A10(10)", "10"], ["A11(12)", "12"]],
		interrupt: [["3", "3"], ["2", "2"], ["0", "0"], ["1", "1"], ["7", "7"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'], ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "micro",
		cpu: "atmega32u4",
		speed: "57600",
		prog: "avr109",
		usb: "micro USB",
		voltage: "5V",
		inout: "20"
	},
	yun: {
	    description: "Arduino Yun",
	    BUILTIN_LED: 13,
		picture : "media/yun.jpg",
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"], ["13", "13"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6(4)", "4"], ["A7(6)", "6"], ["A8(8)", "8"], ["A9(9)", "9"], ["A10(10)", "10"], ["A11(12)", "12"]],
		interrupt: [["3", "3"], ["2", "2"], ["0", "0"], ["1", "1"], ["7", "7"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "yun",
		cpu: "atmega32u4",
		speed: "57600",
		prog: "avr109",
		usb: "micro USB",
		voltage: "5V",
		inout: "20"
	},
	leonardo: {
	    description: "Arduino Léonardo",
	    BUILTIN_LED: 13,
		picture : "media/leonardo.jpg",
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"], ["13", "13"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6(4)", "4"], ["A7(6)", "6"], ["A8(8)", "8"], ["A9(9)", "9"], ["A10(10)", "10"], ["A11(12)", "12"]],
		interrupt: [["3", "3"], ["2", "2"], ["0", "0"], ["1", "1"], ["7", "7"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "leonardo",
		cpu: "atmega32u4",
		speed: "57600",
		prog: "avr109",
		usb: "micro USB",
		voltage: "5V",
		inout: "20"
	},
	uno: {
	    description: "Arduino Uno",
	    BUILTIN_LED: 13,
		picture : "media/uno.jpg",
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "uno",
		cpu: "atmega328p",
		speed: "115200",
		prog: "arduino",
		usb: "USB B",
		voltage: "5V",
		inout: "20"
	},
	mega:{
		description: "Arduino Méga 2560 / ADK",
	    BUILTIN_LED: 13,
		picture : "media/mega.jpg",
		dropdownPWM: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["44", "44"], ["45", "45"], ["46", "46"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"], ["A8", "A8"], ["A9", "A9"], ["A10", "A10"], ["A11", "A11"], ["A12", "A12"], ["A13", "A13"], ["A14", "A14"], ["A15", "A15"]],
		interrupt: [["21", "21"], ["20", "20"], ["19", "19"], ["18", "18"], ["6", "6"], ["7", "7"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"], ["Rx1/Tx1", "19"], ["Rx2/Tx2", "17"], ["Rx3/Tx3", "15"]],
		build: "mega",
		cpu: "atmega2560",
		speed: "115200",
		prog: "wiring",
		usb: "USB B",
		voltage: "5V",
		inout: "70"
	}
};