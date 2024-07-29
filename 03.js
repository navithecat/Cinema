// Cat 객체를 생성

var cat = {
    name: "navi",
    sex: "male",
};

// 이름을 변경하는 함수, chagename을 정의
// 입력값 : 변경대상 cat 객체, 변경하고자 하는 이름
// 출력값 : 새로운 cat 객체
// 특징 : 객체의 프로퍼티(속성)에 접근해서 이름을 변경 --> 가변
var changename = function (cat, newname) {
    var newcat = cat;
    newcat.name = newname;
    return newcat;
};

// 변경한 cat 정보를 cat2 변수에 할당하겠음.
// 가변이기 때문에 user1도 영향을 받음.
var cat2 = changename(cat, "navi2");

// 결국 아래 로직은 skip
if (cat !== cat2) {
    console.log("고양이 정보가 변경되었습니다.");
}

console.log(cat.name, cat2.name) // navi2, navi2
console.log(cat === cat2)


// Cat 객체를 생성

var cat = {
    name: "navi",
    sex: "male",
};

// 이름을 변경하는 함수 정의
// 입력값 변경대상 cat 객체, 변경하고ㅗ자 하는 이름
// 출력값 : 새로운 cat 객체
// 특징: 객체의 프로퍼티에 접근하는 것이 아니라, 아예 새로운 객체를ㄹ 반ㄴ환 -> 불변
var changename = function (cat, newname) {
    return {
        name: newname,
        sex: cat.sex,
    };

};

// 변경한 cat 정보를 cat2 변수에 할당.
// 불변이기 때문에 cat1은 영향이 없음.
var cat2 = changename(cat, "nabi");

// 결국 아래 로직 수행
if (cat !== cat2) {
    console.log("고양이 정보가 변경되었습니다.")


    console.log(cat.name, cat2.name); // navi nabi
    console.log(cat === cat2); // false

    // How about this pattern
    var copyobject = function (target) {
        var result = {};

        // for ~in 구문을 이용하여, 객체의 모든 프로ㅗ퍼티에 접근 할 수 있음.
        // 하드코딩 ㄴㄴ
        // 이 copyobject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면
        // 됨!?
    }

    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;

};

위 패턴을 적용.
var cat = {
    name: "navi",
    sex: "male",
};

var cat2 = copyobject(cat);
cat2.name = "nabi";

if (cat !== cat2) {
    console.log("고양이 정보가 변경되었습니다.");
}

console.log(cat.name, cat2.name);
console.log(cat === cat2);

//-------------------------------------------

var copyobjectdeep = function (target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[pop] = copyobjectdeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
}

// 결과

var obj = {
    a: 1,
    b: {
        c: nulld[1, 2],
    }
};
var obj2 = copyobjectdeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);

// (1) forEach는 배열의 메서드다.
// (2) 이 배열 메서드는 input(매개변수)을 갖는다.
// (3) 그 매개변수는 함수다(매개변수로 들어오는 함수를 = 콜백함수)
// (4) 그 매개변수로 들어온 함수는 input(매개변수)을 갖는다.
// (5) 그 매개변수에는 호출의 주체가 된 배열의 각 요소가 차례대로 할당된다.

// const navi = ["navi", "nabi"]
// navi.foreach(function(){
//     console.log();
// })

// const navi = [
//     {
//         name: "navi"
//         age: 11

//     }, {
//         name: "nabi"
// age: 1
//     }, {
//         name: "nabbi"
//         age: 2

//     }]

//     navi.forEach(function(navis){
//         if(navis.age>=2){
//         console.log(navis.name)
//     }});

// map(~값을 맵핑한다.)

const navi = ["navi", "nabi"];

const cat = navi.map(function(name){
    //console.log(name);
    return name*10;
});

console.log(cat);

const navis = [
    {
        id: 1,
        name: "나비",
        age:11
    },
    {
        id: 2,
        name: "박나비",
        age:10

    }
]
// 배열 복사
const newnavis = navis.map(function(){
return navis;
});

const newnavis = navis.map(function(navis){
   const navi = {
    id: navis.id,
    name: navis.name,
    age: navis.age,
};
return navi;
});



console.log(newnavis);

const navis = [
    {
        id: 1,
        name: "나비",
        age:11
    },
    {
        id: 2,
        name: "박나비",
        age:10

    }
]

const real = navis.filter(function(n){
    if (n.name === "박나비"){
        return true;
    } else {
        return false;
    }
    return n.name === "박나비";
});

console.log(real)