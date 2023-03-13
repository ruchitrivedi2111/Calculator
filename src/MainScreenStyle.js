/* eslint-disable prettier/prettier */
module.exports = {
  main_screen: {
    marginTop: 30,
    flexDirection: 'column',
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
  },

  main_screen__display: {
    elevation: 10,
    width: '95%',
    backgroundColor: 'black',
    borderRadius: 10,
    display: 'flex',
    marginBottom: 10,
    padding: 10,
  },
  main_screen__display_text: {
    fontSize: 50,
    textAlign: 'right',
    color: 'white',
  },

  main_screen__keypad: {
    width: '100%',
    height: '70%',
    display: 'flex',
  },
  main_screen__keypad_row: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  btn_outer: {
    width: 90,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 90,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg_button: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
  },

  btn1_outer: {
    width: 90,
    height: 90,
    backgroundColor: '#FF5757',
    borderRadius: 90,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg1_button: {
    backgroundColor: '#FF5757',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  btn2_outer: {
    width: 90,
    height: 90,

    backgroundColor: '#fdbc00',
    borderRadius: 90,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg2_button: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
};
