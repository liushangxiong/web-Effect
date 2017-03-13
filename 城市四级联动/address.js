var addressInit = function(_carea,_cmbProvince, _cmbCity, _cmbArea,defaultarea1, defaultProvince, defaultCity, defaultArea)  
{  
    var area=document.getElementById(_carea);  
    var cmbProvince = document.getElementById(_cmbProvince);  
    var cmbCity = document.getElementById(_cmbCity);  
    var cmbArea = document.getElementById(_cmbArea);  
    function cmbSelect(cmb, str)  
    {  
    	
        for(var i=0; i<cmb.options.length; i++)  
        {  
            if(cmb.options[i].value == str)  
            {  
                cmb.selectedIndex = i;  
                return;  
            }  
        }  
    }  
    function cmbAddOption(cmb, str, obj)  
    {  
        var option = document.createElement("OPTION");  
        option.innerHTML = str;  
        option.value = str;  
        option.obj = obj;  
        cmb.options.add(option);  
    }  
      
    function changeCity()  
    {  
        cmbArea.options.length = 0;  
        if(cmbCity.selectedIndex == -1)return;  
        var item = cmbCity.options[cmbCity.selectedIndex].obj;  
        for(var i=0; i<item.areaList.length; i++)  
        {  
            cmbAddOption(cmbArea, item.areaList[i], null);  
        }  
        cmbSelect(cmbArea, defaultArea);  
    }  
    function changeProvince()  
    {  
        cmbCity.options.length = 0;  
        cmbCity.onchange = null;  
        if(cmbProvince.selectedIndex == -1)return;  
          
        var item = cmbProvince.options[cmbProvince.selectedIndex].obj;  
        for(var i=0; i<item[cmbProvince.selectedIndex].cityList.length; i++)  
        {  
            cmbAddOption(cmbCity, item[cmbProvince.selectedIndex].cityList[i].name, item[cmbProvince.selectedIndex].cityList[i]);  
        }  
        cmbSelect(cmbCity, defaultCity);  
        changeCity();  
        cmbCity.onchange = changeCity;  
    }  
    function changeArea()  
    {  
        cmbProvince.options.length = 0;  
        cmbProvince.onchange = null;  
        if(area.selectedIndex == -1)return;  
        var item=area.options[area.selectedIndex].obj;  
        for(var i=0;i<item.Allcity.length;i++)  
        {  
            cmbAddOption(cmbProvince,item.Allcity[i].name,item.Allcity);  
        }  
        cmbSelect(cmbProvince,defaultProvince);  
        changeProvince();  
        cmbProvince.onchange=changeProvince;  
    }  
          
          
          
          
    for(var i=0; i<provinceList.length; i++)  
    {  
    //alert(provinceList[i].Allcity[0].name);  
    //var mess=provinceList[i].Allcity.join('--');  
    //alert(mess);  
        cmbAddOption(area, provinceList[i]._area, provinceList[i]);  
    }  
      
    cmbSelect(area, defaultarea1);  
    changeArea();  
    area.onchange = changeArea;  
}  
  
var provinceList = [  
{_area:"上海",Allcity:[  
  
{name:'上海市', cityList:[           
{name:'黄浦区', areaList:['南京东路街道','外滩街道','半淞园街道','小东门街道','豫园街道','老西门街道','五里桥街道','打浦桥街道','淮海中路街道','瑞金二路街道','暂不知道']},          
{name:'闵行区', areaList:['江川路街道','古美街道新虹街道','莘庄镇','七宝镇','颛桥镇','华漕镇','虹桥镇','梅陇镇','吴泾镇','马桥镇','浦江镇','莘庄工业区']},          
{name:'徐汇区', areaList:['天平路街道','湖南路街道','斜土路街道','枫林路街道','长桥街道','田林街道','虹梅路街道','康健新村街道','徐家汇街道','凌云路街道','龙华街道','漕河泾街道','华泾镇漕河泾新兴技术开发区']},          
{name:'嘉定区', areaList:['新成路街道','真新街道','菊园新区管委会','嘉定镇街道','南翔镇','安亭镇','马陆镇','徐行镇','华亭镇','外冈镇','江桥镇','嘉定工业区']},                      
{name:'长宁区', areaList:['华阳路街道','江苏路街道','新华路街道','周家桥街道','天山路街道','仙霞新村街道','虹桥街道','程家桥街道','北新泾街道','新泾镇']},          
{name:'静安区', areaList:['江宁路街道','石门二路街道','南京西路街道','静安寺街道','曹家渡街道']},          
{name:'普陀区', areaList:['曹杨新村街道','长风新村街道','长寿路街道','甘泉路街道','石泉路街道','宜川路街道','万里街道','真如镇街道','长征镇桃浦镇']},          
{name:'闸北区', areaList:['天目西路街道','北站街道','宝山路街道','共和新路街道','大宁路街道','彭浦新村街道','临汾路街道','芷江西路街道','彭浦镇']},          
{name:'虹口区', areaList:['欧阳路街道','曲阳路街道','广中路街道','嘉兴路街道','凉城新村街道','四川北路街道','提篮桥街道','江湾镇街道']},          
{name:'杨浦区', areaList:['定海路街道','平凉路街道','江浦路街道','四平路街道','控江路街道','长白新村街道','延吉新村街道','殷行街道','大桥街道','五角场街道','新江湾城街道','五角场镇']},          
{name:'宝山区', areaList:['友谊路街道','吴淞街道','张庙街道','罗店镇','大场镇','杨行镇','月浦镇','罗泾镇','顾村镇','高境镇','庙行镇','淞南镇','宝山城市工业园区']},          
{name:'浦东新区', areaList:['潍坊新村街道','陆家嘴街道','周家渡街道','塘桥街道上钢新村街道','南码头路街道','沪东新村街道','金杨新村街道','洋泾街道','浦兴路街道','东明路街道','花木街道','川沙新镇','高桥镇','北蔡镇','合庆镇','唐镇','曹路镇','金桥镇','高行镇','高东镇','张江镇','三林镇','惠南镇','周浦镇','新场镇','大团镇','康桥镇','航头镇','祝桥镇','泥城镇','宣桥镇','书院镇','万祥镇','老港镇','南汇新城镇','芦潮港农场','东海农场','朝阳农场','外高桥保税区','金桥经济技术开发区','张江高科技园区']},          
{name:'金山区', areaList:['石化街道朱泾镇枫泾镇张堰镇亭林镇吕巷镇廊下镇金山卫镇漕泾镇山阳镇金山工业区']},            
{name:'松江区', areaList:['岳阳街道','永丰街道','方松街道','中山街道泗泾镇','佘山镇','车墩镇','新桥镇','洞泾镇','九亭镇','泖港镇','石湖荡镇','新浜镇','叶榭镇','小昆山镇','松江工业区','佘山度假区','上海松江出口加工区']},             
{name:'青浦区', areaList:['夏阳街道','盈浦街道','香花桥街道','朱家角镇','练塘镇','金泽镇','赵巷镇','徐泾镇','华新镇','重固镇','白鹤镇']},            
{name:'奉贤区', areaList:['南桥镇','奉城镇','庄行镇','金汇镇','四团镇','青村镇','柘林镇','海湾镇奉浦社区','上海市奉贤区海湾旅游区金海社区','上海海港综合经济开发区']},                    
{name:'崇明县', areaList:['城桥镇','堡镇','新河镇','庙镇','竖新镇','向化镇','三星镇','港沿镇','中兴镇','陈家镇','绿华镇','港西镇','建设镇','新海镇','东平镇','长兴镇','新村乡','横沙乡前卫农场','东平林场','上实现代农业园区']},         
{name:'其它区', areaList:['其它']}  
]}
]  
}
  
];  