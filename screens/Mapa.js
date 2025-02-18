import React, { useState, useRef, useEffect  } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {PROVIDER_GOOGLE} from 'react-native-maps';


const Ruse = {
  latitude: 43.830241259170045,
  longitude: 25.960051315165508,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function Mapa() {
  const [coords, setCoords] = useState([]);
  useEffect(() => {
    //fetch the coordinates and then store its value into the coords Hook.
    getDirections("52.5200066,13.404954", "50.1109221,8.6821267")
      .then(Ruse => setCoords(Ruse))
      .catch(err => console.log("Something went wrong"));
  }, []);
  return (
    <View style={styles.container}>
      <MapView 
        style={{height:'100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={Ruse}
        customMapStyle={mapStyle}
        ref={map => {this.map = map}}
      >

        <Marker coordinate={{latitude: 43.83271425108952, longitude: 25.973702044470542}} pinColor="blue"><CustomMarker2/></Marker>
        <Marker coordinate={{latitude: 43.83278097463421, longitude: 25.974274391932124}} pinColor="blue"><CustomMarker3/></Marker>
        <Marker coordinate={{latitude:  43.832088350267675, longitude:25.977186277690578 }} pinColor="blue"><CustomMarker4/></Marker>
        <Marker coordinate={{latitude:  43.829640288794, longitude:  25.975102061649576}} pinColor="blue"><CustomMarker5/></Marker>
        <Marker coordinate={{latitude:  43.832269016087615, longitude: 25.977287657350992}} pinColor="blue"><CustomMarker6/></Marker>
        <Marker coordinate={{latitude:  43.83257054705813, longitude: 25.969813609500335 }} pinColor="blue"><CustomMarker7/></Marker>
        <Marker coordinate={{latitude:  43.82877687258588, longitude: 25.975858957350816}} pinColor="blue"><CustomMarker8/></Marker>
        <Marker coordinate={{latitude:  43.827566793684205, longitude: 25.97216433711214 }} pinColor="blue"><CustomMarker9/></Marker>
        <Marker coordinate={{latitude:  43.82369338595171, longitude: 25.974157557350726}} pinColor="blue"><CustomMarker10/></Marker>
        <Marker coordinate={{latitude:  43.820627857433706, longitude: 25.971720916276226 }} pinColor="blue"><CustomMarker11/></Marker>
        <Marker coordinate={{latitude:  43.820604634510175, longitude: 25.97156534815661}} pinColor="blue"><CustomMarker12/></Marker>
        <Marker coordinate={{latitude:  43.82347799357603, longitude: 25.980611845112193}} pinColor="blue"><CustomMarker13/></Marker>
        <Marker coordinate={{latitude:  43.825010613388656, longitude: 25.979742809409494}} pinColor="blue"><CustomMarker14/></Marker>
        <Marker coordinate={{latitude:  43.823357849249156, longitude: 25.968669545112203 }} pinColor="blue"><CustomMarker15/></Marker>
        <Marker coordinate={{latitude:  43.82355789301669, longitude: 25.96855671627641}} pinColor="blue"><CustomMarker16/></Marker>
        <Marker coordinate={{latitude:  43.82587548814888, longitude: 25.970697496037722}} pinColor="blue"><CustomMarker17/></Marker>
        <Marker coordinate={{latitude:  43.82523006228034, longitude: 25.96879914749971 }} pinColor="blue"><CustomMarker18/></Marker>
        <Marker coordinate={{latitude:  43.8251603988531, longitude: 25.96786573878199}} pinColor="blue"><CustomMarker19/></Marker>
        <Marker coordinate={{latitude:  43.81414463609905, longitude: 25.982027472096835}} pinColor="blue"><CustomMarker20/></Marker>
        <Marker coordinate={{latitude:  43.82922237620283, longitude: 25.970491180037428}} pinColor="blue"><CustomMarker21/></Marker>
        <Marker coordinate={{latitude:  43.829175937033156, longitude: 25.97016931496235}} pinColor="blue"><CustomMarker22/></Marker>
        <Marker coordinate={{latitude:  43.81324709598915, longitude: 25.981672816287922}} pinColor="blue"><CustomMarker23/></Marker>
        <Marker coordinate={{latitude:  43.832720997018285, longitude: 25.973701892993407}} pinColor="blue"><CustomMarker24/></Marker>
        <Marker coordinate={{latitude:  43.80444843195661, longitude: 25.984326018693118}} pinColor="blue"><CustomMarker25/></Marker>
        <Marker coordinate={{latitude:  43.80684193897717, longitude: 25.995351164693197}} pinColor="blue"><CustomMarker26/></Marker>
        <Marker coordinate={{latitude:  43.82776175038852, longitude: 25.963434634007257}} pinColor="blue"><CustomMarker27/></Marker>
        <Marker coordinate={{latitude:  43.829994658885994, longitude: 25.96016229723163}} pinColor="blue"><CustomMarker28/></Marker>
        <Marker coordinate={{latitude:  43.83024620050571, longitude: 25.960017457947846}} pinColor="blue"><CustomMarker29/></Marker>
        <Marker coordinate={{latitude:  43.82831895566293, longitude: 25.94993778373903}} pinColor="blue"><CustomMarker30/></Marker>
        <Marker coordinate={{latitude:  43.83085761373899, longitude: 25.95355340147543}} pinColor="blue"><CustomMarker31/></Marker>
        <Marker coordinate={{latitude:  43.82862855389008, longitude: 25.949873410724017}} pinColor="blue"><CustomMarker32/></Marker>
        <Marker coordinate={{latitude:  43.83194895633739, longitude: 25.956503791679136}} pinColor="blue"><CustomMarker33/></Marker>
        <Marker coordinate={{latitude:  43.83108980268608, longitude: 25.953295909414024 }} pinColor="blue"><CustomMarker34/></Marker>
        <Marker coordinate={{latitude:  43.83217340156102, longitude: 25.95621411311157}} pinColor="blue"><CustomMarker35/></Marker>
        <Marker coordinate={{latitude:  43.814021265643184, longitude: 25.928245948609636}} pinColor="blue"><CustomMarker36/></Marker>
        <Marker coordinate={{latitude:  43.82266168753604, longitude: 25.932690666742136}} pinColor="blue"><CustomMarker37/></Marker>
        <Marker coordinate={{latitude:  43.82277026199973, longitude: 25.932798715100176}} pinColor="blue"><CustomMarker38/></Marker>
        <Marker coordinate={{latitude:  43.826062829560954, longitude:  25.93549972227727}} pinColor="blue"><CustomMarker39/></Marker>
        <Marker coordinate={{latitude:  43.83142766988399, longitude: 25.938949659366106}} pinColor="blue"><CustomMarker40/></Marker>
        <Marker coordinate={{latitude:  43.83168167645398, longitude: 25.939506357425614}} pinColor="blue"><CustomMarker41/></Marker>
        <Marker coordinate={{latitude:  43.83424742768521, longitude: 25.942071271292672}} pinColor="blue"><CustomMarker42/></Marker>
        <Marker coordinate={{latitude:  43.83419776441045, longitude: 25.94229899928872}} pinColor="blue"><CustomMarker43/></Marker>
        <Marker coordinate={{latitude:  43.83298231947736, longitude: 25.950185552288854}} pinColor="blue"><CustomMarker44/></Marker>
        <Marker coordinate={{latitude:  43.83651258725053, longitude: 25.949438022231227}} pinColor="blue"><CustomMarker45/></Marker>
        <Marker coordinate={{latitude:  43.83772043712405, longitude: 25.949033428509082}} pinColor="blue"><CustomMarker46/></Marker>
        <Marker coordinate={{latitude:  43.83194310956367, longitude: 25.95158149573226}} pinColor="blue"><CustomMarker47/></Marker>
        <Marker coordinate={{latitude:  43.84057589640479, longitude: 25.948261423771758}} pinColor="blue"><CustomMarker48/></Marker>
        <Marker coordinate={{latitude:  43.837889218390416, longitude: 25.95102862526153}} pinColor="blue"><CustomMarker49/></Marker>
        <Marker coordinate={{latitude:  43.83106548474782, longitude: 25.95331704244258}} pinColor="blue"><CustomMarker50/></Marker>
        <Marker coordinate={{latitude:  43.84234540404618, longitude: 25.948121612909688}} pinColor="blue"><CustomMarker51/></Marker>
        <Marker coordinate={{latitude:  43.83445790284409, longitude: 25.95462172457874}} pinColor="blue"><CustomMarker52/></Marker>
        <Marker coordinate={{latitude:  43.83548112959113, longitude:25.973734925457414 }} pinColor="blue"><CustomMarker53/></Marker>
        <Marker coordinate={{latitude:  43.83590895470455, longitude: 25.973493416774925}} pinColor="blue"><CustomMarker54/></Marker>
        <Marker coordinate={{latitude:  43.83749388684272, longitude:25.973849946653566 }} pinColor="blue"><CustomMarker55/></Marker>
        <Marker coordinate={{latitude:  43.833283168877124, longitude: 25.969428504154177}} pinColor="blue"><CustomMarker56/></Marker>
        <Marker coordinate={{latitude:  43.83795738669014, longitude: 25.974865430101712}} pinColor="blue"><CustomMarker57/></Marker>
        <Marker coordinate={{latitude:  43.83933626248603, longitude: 25.975798308689523}} pinColor="blue"><CustomMarker58/></Marker>
        <Marker coordinate={{latitude:  43.84181093923528, longitude: 25.974108320877814}} pinColor="blue"><CustomMarker59/></Marker>
        <Marker coordinate={{latitude:  43.841422848780375, longitude: 25.970387023162175}} pinColor="blue"><CustomMarker60/></Marker>
        <Marker coordinate={{latitude:  43.84223627556459, longitude: 25.97334515960406}} pinColor="blue"><CustomMarker61/></Marker>
        <Marker coordinate={{latitude:  43.84375421969598, longitude: 25.977646813029}} pinColor="blue"><CustomMarker62/></Marker>
        <Marker coordinate={{latitude:  43.84379677853744, longitude: 25.97726593934927}} pinColor="blue"><CustomMarker63/></Marker>
        <Marker coordinate={{latitude:  43.844866680537486, longitude: 25.9815162268861}} pinColor="blue"><CustomMarker64/></Marker>
        <Marker coordinate={{latitude:  43.845957541108874, longitude: 25.975992649874538}} pinColor="blue"><CustomMarker65/></Marker>
        <Marker coordinate={{latitude:  43.84536723546745, longitude: 25.974737512362918}} pinColor="blue"><CustomMarker66/></Marker>
        <Marker coordinate={{latitude:  43.84630661918209, longitude: 25.983823744497442}} pinColor="blue"><CustomMarker67/></Marker>
        <Marker coordinate={{latitude:  43.84862966817929, longitude: 25.98007060910213}} pinColor="blue"><CustomMarker68/></Marker>
        <Marker coordinate={{latitude:  43.8494150428009, longitude: 25.978877202687546}} pinColor="blue"><CustomMarker69/></Marker>
        <Marker coordinate={{latitude:  43.8495950247739, longitude: 25.979158366316348}} pinColor="blue"><CustomMarker70/></Marker>
        <Marker coordinate={{latitude:  43.844192921302714, longitude: 25.970984643262284}} pinColor="blue"><CustomMarker71/></Marker>
        <Marker coordinate={{latitude:  43.85020059243548, longitude: 25.9777043014099}} pinColor="blue"><CustomMarker72/></Marker>
        <Marker coordinate={{latitude:  43.84899850448742, longitude: 25.973568620984302}} pinColor="blue"><CustomMarker73/></Marker>
        <Marker coordinate={{latitude:  43.84944564635682, longitude: 25.97403306721274}} pinColor="blue"><CustomMarker74/></Marker>
        <Marker coordinate={{latitude:  43.85062553208723, longitude: 25.978550430131854}} pinColor="blue"><CustomMarker75/></Marker>
        <Marker coordinate={{latitude:  43.84410849267693, longitude: 25.969890631269422}} pinColor="blue"><CustomMarker76/></Marker>
        <Marker coordinate={{latitude:  43.85031374191999, longitude: 25.982336192012095}} pinColor="blue"><CustomMarker77/></Marker>
        <Marker coordinate={{latitude:  43.85777891224872, longitude: 25.997922319277574}} pinColor="blue"><CustomMarker78/></Marker>
        <Marker coordinate={{latitude:  43.853665284726446, longitude: 26.00255493527995}} pinColor="blue"><CustomMarker79/></Marker>
        <Marker coordinate={{latitude:  43.853526246695615, longitude: 26.00353838913471}} pinColor="blue"><CustomMarker80/></Marker>
        <Marker coordinate={{latitude:  43.8556557644328, longitude: 25.99729382506355}} pinColor="blue"><CustomMarker81/></Marker>
        <Marker coordinate={{latitude:  43.85486750646105, longitude: 25.99729559276838}} pinColor="blue"><CustomMarker82/></Marker>
        <Marker coordinate={{latitude:  43.852987950085804, longitude: 25.99716813705219}} pinColor="blue"><CustomMarker83/></Marker>
        <Marker coordinate={{latitude:  43.852713907904636, longitude: 25.99708724677369}} pinColor="blue"><CustomMarker84/></Marker>
        <Marker coordinate={{latitude:  43.8614786050069, longitude: 26.014550918652677}} pinColor="blue"><CustomMarker85/></Marker>
        <Marker coordinate={{latitude:  43.862306316437355, longitude: 26.01529120834004}} pinColor="blue"><CustomMarker86/></Marker>
        <Marker coordinate={{latitude:  43.85210729618723, longitude: 25.990373363358096}} pinColor="blue"><CustomMarker87/></Marker>
        <Marker coordinate={{latitude:  43.851766872038965, longitude: 25.9898691080638}} pinColor="blue"><CustomMarker88/></Marker>
        <Marker coordinate={{latitude:  43.86836331544007, longitude: 25.9923339932264}} pinColor="blue"><CustomMarker89/></Marker>
        <Marker coordinate={{latitude:  43.86839844514188, longitude: 25.99176464386652}} pinColor="blue"><CustomMarker90/></Marker>
        <Marker coordinate={{latitude:  43.869448302782004, longitude: 26.015344945600084}} pinColor="blue"><CustomMarker91/></Marker>
        <Marker coordinate={{latitude:  43.87225464251075, longitude: 26.003632984260197}} pinColor="blue"><CustomMarker92/></Marker>
        <Marker coordinate={{latitude:  43.86940203990705, longitude: 26.015956328440332}} pinColor="blue"><CustomMarker93/></Marker>
        <Marker coordinate={{latitude:  43.87240503897608, longitude: 26.002889378575528}} pinColor="blue"><CustomMarker94/></Marker>
        <Marker coordinate={{latitude:  43.86671376347228, longitude: 25.988228765210938 }} pinColor="blue"><CustomMarker95/></Marker>
        <Marker coordinate={{latitude:  43.86676790841439, longitude: 25.987681594572447}} pinColor="blue"><CustomMarker96/></Marker>
        <Marker coordinate={{latitude:  43.86523845215078, longitude: 25.98466287555094}} pinColor="blue"><CustomMarker97/></Marker>
        <Marker coordinate={{latitude:  43.8607433276211, longitude: 25.97821659435271}} pinColor="blue"><CustomMarker98/></Marker>
        <Marker coordinate={{latitude:  43.86163671037755, longitude: 25.977498464537646}} pinColor="blue"><CustomMarker99/></Marker>
        <Marker coordinate={{latitude:  43.85905766442857, longitude: 25.97480101762894}} pinColor="blue"><CustomMarker100/></Marker>
        <Marker coordinate={{latitude:  43.856783678374114, longitude: 25.975895560713344}} pinColor="blue"><CustomMarker101/></Marker>
        <Marker coordinate={{latitude:  43.85701569949771, longitude: 25.97513915912813}} pinColor="blue"><CustomMarker102/></Marker>
        <Marker coordinate={{latitude:  43.8647050537099, longitude: 25.984312360980773}} pinColor="blue"><CustomMarker103/></Marker>
        <Marker coordinate={{latitude:  43.85812968508153, longitude: 25.972982714947914}} pinColor="blue"><CustomMarker104/></Marker>
        <Marker coordinate={{latitude:  43.85896584808831, longitude: 25.972008419827805}} pinColor="blue"><CustomMarker105/></Marker>
        <Marker coordinate={{latitude:  43.85268752542166, longitude: 25.978577995844766}} pinColor="blue"><CustomMarker106/></Marker>
        <Marker coordinate={{latitude:  43.852409024468976, longitude: 25.978973077455393}} pinColor="blue"><CustomMarker107/></Marker>
        <Marker coordinate={{latitude:  43.85142830966925, longitude: 25.984821334942964}} pinColor="blue"><CustomMarker108/></Marker>
        <Marker coordinate={{latitude:  43.85085754058012, longitude: 25.98278610233126}} pinColor="blue"><CustomMarker109/></Marker>
        <Marker coordinate={{latitude:  43.85636580937068, longitude: 25.96931344193166}} pinColor="blue"><CustomMarker110/></Marker>
        <Marker coordinate={{latitude:  43.854663831892026, longitude: 25.965815884259364}} pinColor="blue"><CustomMarker111/></Marker>
        <Marker coordinate={{latitude:  43.855244046766565, longitude: 25.963584284259614}} pinColor="blue"><CustomMarker112/></Marker>
        <Marker coordinate={{latitude:  43.85368902806799, longitude: 25.9626616038338}} pinColor="blue"><CustomMarker113/></Marker>
        <Marker coordinate={{latitude:  43.8568918674074, longitude: 25.967693424735096}} pinColor="blue"><CustomMarker114/></Marker>
        <Marker coordinate={{latitude:  43.85585528024657, longitude: 25.96207146283286}} pinColor="blue"><CustomMarker115/></Marker>
        <Marker coordinate={{latitude:  43.85163099743037, longitude: 25.95752244060448}} pinColor="blue"><CustomMarker116/></Marker>
        <Marker coordinate={{latitude:  43.849480153066025, longitude: 25.95922835727548}} pinColor="blue"><CustomMarker117/></Marker>
        <Marker coordinate={{latitude:  43.84703943166762, longitude: 25.96662433593976}} pinColor="blue"><CustomMarker118/></Marker>
        <Marker coordinate={{latitude:  43.84852844052682, longitude: 25.959163992194007}} pinColor="blue"><CustomMarker119/></Marker>
        <Marker coordinate={{latitude:  43.84643160248633, longitude: 25.96196422843941}} pinColor="blue"><CustomMarker120/></Marker>
        <Marker coordinate={{latitude:  43.84383166316472, longitude: 25.951299686111245}} pinColor="blue"><CustomMarker121/></Marker>
        <Marker coordinate={{latitude:  43.84467509526617, longitude: 25.952415485060314}} pinColor="blue"><CustomMarker122/></Marker>
        <Marker coordinate={{latitude:  43.84563678763548, longitude: 25.954024698565924}} pinColor="blue"><CustomMarker123/></Marker>
        <Marker coordinate={{latitude:  43.84107893526362, longitude: 25.959891070766982}} pinColor="blue"><CustomMarker124/></Marker>
        <Marker coordinate={{latitude:  43.84084680370618, longitude: 25.960459761505387}} pinColor="blue"><CustomMarker125/></Marker>
        <Marker coordinate={{latitude:  43.834222350533686, longitude: 25.96203682473432}} pinColor="blue"><CustomMarker126/></Marker>
        <Marker coordinate={{latitude:  43.834059826898184, longitude: 25.96228358796344}} pinColor="blue"><CustomMarker127/></Marker>
        <Marker coordinate={{latitude:  43.84480093426485, longitude: 25.956597314947484}} pinColor="blue"><CustomMarker128/></Marker>
        <Marker coordinate={{latitude:  43.85076411317201, longitude: 25.949094705686072}} pinColor="blue"><CustomMarker129/></Marker>
        <Marker coordinate={{latitude:  43.85245075891369, longitude: 25.95349351680013}} pinColor="blue"><CustomMarker130/></Marker>
        <Marker coordinate={{latitude:  43.84530921627428, longitude: 25.956916034521768}} pinColor="blue"><CustomMarker131/></Marker>
        <Marker coordinate={{latitude:  43.84698053198982, longitude: 25.960306287963846}} pinColor="blue"><CustomMarker132/></Marker>
        <Marker coordinate={{latitude:  43.84489139203766, longitude: 25.960016632669472}} pinColor="blue"><CustomMarker133/></Marker>
        <Marker coordinate={{latitude:  43.84191691249853, longitude: 25.965456005685724}} pinColor="blue"><CustomMarker134/></Marker>
        <Marker coordinate={{latitude:  43.84160934747941, longitude: 25.964995926586866}} pinColor="blue"><CustomMarker135/></Marker>
        <Marker coordinate={{latitude:  43.84613936622141, longitude: 25.962248248013754}} pinColor="blue"><CustomMarker136/></Marker>
        <Marker coordinate={{latitude:  43.873765323885166, longitude: 26.010012525255735}} pinColor="blue"><CustomMarker137/></Marker>
        <Marker coordinate={{latitude:  43.8737327208736, longitude: 26.01145980177961}} pinColor="blue"><CustomMarker138/></Marker>
        <Marker coordinate={{latitude:  43.87871799955171, longitude: 26.020121962833663}} pinColor="blue"><CustomMarker139/></Marker>
        <Marker coordinate={{latitude:  43.87860199787835, longitude: 26.020347268390687}} pinColor="blue"><CustomMarker140/></Marker>
        <Marker coordinate={{latitude:  43.87912120367926, longitude: 26.026548753571948}} pinColor="blue"><CustomMarker141/></Marker>
        <Marker coordinate={{latitude:  43.87894333555812, longitude: 26.026591668916144}} pinColor="blue"><CustomMarker142/></Marker>
        <Marker coordinate={{latitude:  43.870341439174574, longitude: 26.038579313096115}} pinColor="blue"><CustomMarker143/></Marker>
        <Marker coordinate={{latitude:  43.87570170189108, longitude: 26.015505284260232}} pinColor="blue"><CustomMarker144/></Marker>
        <Marker coordinate={{latitude:  43.87529954143425, longitude: 26.015666216800966}} pinColor="blue"><CustomMarker145/></Marker>
        <Marker coordinate={{latitude:  43.83038658184904, longitude: 25.95656520030346}} pinColor="blue"><CustomMarker146/></Marker>
        {/* {Ruse.length > 0 && <Polyline coordinates={Ruse} />} */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
  marker: {
    paddingVertical: 0.5,
    paddingHorizontal: 1,
    backgroundColor: "#3d85c6",
    borderColor: "#000000",
    borderRadius: 3,
    elevation: 5,
  },
  text: {
  color: "#fffafa",
  },
  color:{
    fontSize: 9,
  },
});

function CustomMarker2() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>10 15 28 21 29</Text>
    </View>
  );
}
function CustomMarker3() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>10 15 28 21 29</Text>
    </View>
  );
}
function CustomMarker4() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>28 33 21 29</Text>
    </View>
  );
}
function CustomMarker5() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>4</Text>
    </View>
  );
}
function CustomMarker6(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>21 28 29 33</Text>
    </View>
  );
}
function CustomMarker7(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 15 24 28 29 33</Text>
    </View>
  );
}
function CustomMarker8(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>24 28 29 33</Text>
    </View>
  );
}
function CustomMarker9(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 24 27 28 33</Text>
    </View>
  );
}
function CustomMarker10(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker11(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 18 27 28</Text>
    </View>
  );
}
function CustomMarker12(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 18 27 28</Text>
    </View>
  );
}
function CustomMarker13(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>21 28 29 33</Text>
    </View>
  );
}
function CustomMarker14(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>24 28 29 33</Text>
    </View>
  );
}
function CustomMarker15(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 18 27 28</Text>
    </View>
  );
}
function CustomMarker16(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 18 27 28</Text>
    </View>
  );
}
function CustomMarker17(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 18 24 27 28</Text>
    </View>
  );
}
function CustomMarker18(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 18 24 27 28</Text>
    </View>
  );
}
function CustomMarker19(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 18 24 27 28</Text>
    </View>
  );
}
function CustomMarker20(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>33</Text>
    </View>
  );
}
function CustomMarker21(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 15 24 27 28 33</Text>
    </View>
  );
}
function CustomMarker22(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 15 24 27 28 33</Text>
    </View>
  );
}
function CustomMarker23(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>33</Text>
    </View>
  );
}
function CustomMarker24(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>10 15 21 28 29</Text>
    </View>
  );
}
function CustomMarker25(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 33</Text>
    </View>
  );
}
function CustomMarker26(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>33</Text>
    </View>
  );
}
function CustomMarker27(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 15 18 28</Text>
    </View>
  );
}
function CustomMarker28(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 15 18</Text>
    </View>
  );
}
function CustomMarker29(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 15 18</Text>
    </View>
  );
}
function CustomMarker30(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 15 18</Text>
    </View>
  );
}
function CustomMarker31(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 15 18</Text>
    </View>
  );
}
function CustomMarker32(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 15 18</Text>
    </View>
  );
}
function CustomMarker33(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16</Text>
    </View>
  );
}
function CustomMarker34(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16</Text>
    </View>
  );
}
function CustomMarker35(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16</Text>
    </View>
  );
}
function CustomMarker36(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 6</Text>
    </View>
  );
}
function CustomMarker37(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>2 6 16 24</Text>
    </View>
  );
}
function CustomMarker38(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>3 19</Text>
    </View>
  );
}
function CustomMarker39(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>2 6 16</Text>
    </View>
  );
}
function CustomMarker40(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>2 6 16 24</Text>
    </View>
  );
}
function CustomMarker41(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>2 3 19 24</Text>
    </View>
  );
}
function CustomMarker42(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>2 6 16 24</Text>
    </View>
  );
}
function CustomMarker43(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>2 6 16 24</Text>
    </View>
  );
}
function CustomMarker44(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 24</Text>
    </View>
  );
}
function CustomMarker45(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 24 28</Text>
    </View>
  );
}
function CustomMarker46(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16 24 28</Text>
    </View>
  );
}
function CustomMarker47(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16</Text>
    </View>
  );
}
function CustomMarker48(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>6 11 12 15 16 24 28 </Text>
    </View>
  );
}
function CustomMarker49(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16 28</Text>
    </View>
  );
}
function CustomMarker50(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16</Text>
    </View>
  );
}
function CustomMarker51(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>6 11 12 24 28</Text>
    </View>
  );
}
function CustomMarker52(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16</Text>
    </View>
  );
}
function CustomMarker53(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>8 10 15 21 28 29</Text>
    </View>
  );
}
function CustomMarker54(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>10 13 15 21 28 29</Text>
    </View>
  );
}
function CustomMarker55(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>10 13 15 21 28 29</Text>
    </View>
  );
}
function CustomMarker56(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>13 15 24 28 29 33</Text>
    </View>
  );
}
function CustomMarker57(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>4 10 30</Text>
    </View>
  );
}
function CustomMarker58(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>8 10 15 28 29</Text>
    </View>
  );
}
function CustomMarker59(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>6 15 16</Text>
    </View>
  );
}
function CustomMarker60(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 28</Text>
    </View>
  );
}
function CustomMarker61(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>6 15 16 28</Text>
    </View>
  );
}
function CustomMarker62(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16</Text>
    </View>
  );
}
function CustomMarker63(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16</Text>
    </View>
  );
}
function CustomMarker64(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16</Text>
    </View>
  );
}
function CustomMarker65(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16</Text>
    </View>
  );
}
function CustomMarker66(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16</Text>
    </View>
  );
}
function CustomMarker67(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker68(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker69(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker70(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker71(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 6</Text>
    </View>
  );
}
function CustomMarker72(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16</Text>
    </View>
  );
}
function CustomMarker73(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>33 2 13 21</Text>
    </View>
  );
}
function CustomMarker74(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>33 2 13 21</Text>
    </View>
  );
}
function CustomMarker75(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker76(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>4 19</Text>
    </View>
  );
}
function CustomMarker77(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker78(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 33 2 21</Text>
    </View>
  );
}
function CustomMarker79(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker80(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18 2</Text>
    </View>
  );
}
function CustomMarker81(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 2</Text>
    </View>
  );
}
function CustomMarker82(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 2</Text>
    </View>
  );
}
function CustomMarker83(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18 2</Text>
    </View>
  );
}
function CustomMarker84(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>33 2 13 21</Text>
    </View>
  );
}
function CustomMarker85(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12</Text>
    </View>
  );
}
function CustomMarker86(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12</Text>
    </View>
  );
}
function CustomMarker87(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18 2</Text>
    </View>
  );
}
function CustomMarker88(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18 2</Text>
    </View>
  );
}
function CustomMarker89(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>4 28</Text>
    </View>
  );
}
function CustomMarker90(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>4 28 27 29</Text>
    </View>
  );
}
function CustomMarker91(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12</Text>
    </View>
  );
}
function CustomMarker92(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 28 27</Text>
    </View>
  );
}
function CustomMarker93(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12</Text>
    </View>
  );
}
function CustomMarker94(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 28 27</Text>
    </View>
  );
}
function CustomMarker95(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 28 27 29</Text>
    </View>
  );
}
function CustomMarker96(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 28 27 29</Text>
    </View>
  );
}
function CustomMarker97(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>4 28 27 29</Text>
    </View>
  );
}
function CustomMarker98(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 18 28 27 29</Text>
    </View>
  );
}
function CustomMarker99(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 18 28 27 29</Text>
    </View>
  );
}
function CustomMarker100(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 18 28 27 29</Text>
    </View>
  );
}
function CustomMarker101(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 18 28</Text>
    </View>
  );
}
function CustomMarker102(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 18 28 29</Text>
    </View>
  );
}
function CustomMarker103(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 18 28 27 29</Text>
    </View>
  );
}
function CustomMarker104(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>19 30</Text>
    </View>
  );
}
function CustomMarker105(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 18 28 6 28 27 29</Text>
    </View>
  );
}
function CustomMarker106(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker107(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker108(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker109(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 18</Text>
    </View>
  );
}
function CustomMarker110(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 18 28 27 29</Text>
    </View>
  );
}
function CustomMarker111(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 18 28 6 27 29</Text>
    </View>
  );
}
function CustomMarker112(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 18 28 6 27 29</Text>
    </View>
  );
}
function CustomMarker113(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>19 28 30</Text>
    </View>
  );
}
function CustomMarker114(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>16 18 28 6 27 29</Text>
    </View>
  );
}
function CustomMarker115(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>10 16 18 28 6 27</Text>
    </View>
  );
}
function CustomMarker116(){
  return (
    <View style={styles.marker}>
       <Text style={styles.color}>15 16 18 28 6 8 27 29</Text>
    </View>
  );
}
function CustomMarker117(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 18 28 6 8 27 29</Text>
    </View>
  );
}
function CustomMarker118(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 6</Text>
    </View>
  );
}
function CustomMarker119(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 18 28 6</Text>
    </View>
  );
}
function CustomMarker120(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16</Text>
    </View>
  );
}
function CustomMarker121(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16 28 6 24</Text>
    </View>
  );
}
function CustomMarker122(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16 28 6 24</Text>
    </View>
  );
}
function CustomMarker123(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>23</Text>
    </View>
  );
}
function CustomMarker124(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 18 28 8 29</Text>
    </View>
  );
}
function CustomMarker125(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 28 6</Text>
    </View>
  );
}
function CustomMarker126(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 28 29</Text>
    </View>
  );
}
function CustomMarker127(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 15 16 28 29</Text>
    </View>
  );
}
function CustomMarker128(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>19 2 9 24</Text>
    </View>
  );
}
function CustomMarker129(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>12 15 16 6</Text>
    </View>
  );
}
function CustomMarker130(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 28 6 27 29</Text>
    </View>
  );
}
function CustomMarker131(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>23 2 9 24</Text>
    </View>
  );
}
function CustomMarker132(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 28 6 8</Text>
    </View>
  );
}
function CustomMarker133(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 28 6</Text>
    </View>
  );
}
function CustomMarker134(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16 28 6</Text>
    </View>
  );
}
function CustomMarker135(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>4 30</Text>
    </View>
  );
}
function CustomMarker136(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>15 16</Text>
    </View>
  );
}
function CustomMarker137(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>4 28</Text>
    </View>
  );
}
function CustomMarker138(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>4 28</Text>
    </View>
  );
}
function CustomMarker139(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>28</Text>
    </View>
  );
}
function CustomMarker140(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>28</Text>
    </View>
  );
}
function CustomMarker141(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>28</Text>
    </View>
  );
}
function CustomMarker142(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>28</Text>
    </View>
  );
}
function CustomMarker143(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>28</Text>
    </View>
  );
}
function CustomMarker144(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 28</Text>
    </View>
  );
}
function CustomMarker145(){
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>11 12 28</Text>
    </View>
  );
}

function CustomMarker146(){
  return (
    <View style={styles.marker}>
      <Text style={{fontSize: 10, color:"red" }}>test</Text>
    </View>
  );
}

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#1cd20f"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#1cd20f"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];

import {decode} from "@mapbox/polyline"; 
const getDirections = async (startLoc, destinationLoc) => {
  try {
    const KEY = "AIzaSyAl0LHyMqEQGkO6Fe69nqEasLPX_qim4dA"; 
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
    );
    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.points);
    console.log(points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1]
      };
    });
    return coords;
  } catch (error) {
    return error;
  }
};
