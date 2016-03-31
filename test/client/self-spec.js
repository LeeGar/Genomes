
describe('SelfController', function(){
  var $scope, $controller, createController, $cookies, $location, SelfFactory, d3Service, $rootScope, $httpBackend;
  var outcomes = {"outcomes": [{"outcome":"There are high chances that you may lack empathy","pair":"AA","rsid":"rs53576","title":"Empathetic Personality","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/lu7ZtY0ectw\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You may have an increased likelihood of having better muscle performance","pair":"CT","rsid":"rs1815739","title":"Muscle performance","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/x3AsH_T52-k\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You may experience a high likelihood of weight gain / early heart disease and/or early heart attack","pair":"GG","rsid":"rs662799","title":"Risk for early Heart Attack","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/83FYZ23h6lA\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You may be bad at avoidance of errors, low risk for OCD, likely to have ADHD","pair":"CT","rsid":"rs1800497","title":"ADHD and Error avoidance","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/3NlaekvCZ48\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You have a high likelihood of having asthma related symptoms","pair":"GG","rsid":"rs1695","title":"Asthma","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/7EDo9pUYvPE\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You have a heightened risk of baldness","pair":"GG","rsid":"rs6152","title":"Risk of hair loss","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/N5plbx-i2Kw\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You may have wet earwax but with better smelling body odor","pair":"CT","rsid":"rs17822931","title":"Earwax and body odor","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/99u02vOvNvg\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You are less likely to dislike cilantro, may potentially taste like soap","pair":"AC","rsid":"rs72921001","title":"Cilantro","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/6ymoPRWxZl8\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You have an increased affinity for drinking coffee","pair":"CT","rsid":"rs2472297","title":"Coffee Affinity","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/4YOwEqGykDM\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You may have heightened cravings for alcohol consumption","pair":"GG","rsid":"rs1799971","title":"Alcohol Cravings","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/b7m6tIIi9WU\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You have an increased resistance to Malaria and Tuberculosis","pair":"TT","rsid":"rs8177374","title":"Malaria Resistance","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/j9_Vq78Ljzc\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You have a 2.6x increased risk for Rheumatoid Arthritis (RA), lupus, and/or Type-1 Diabetes","pair":"TT","rsid":"rs7574865","title":"Rheumatoid Arthritis/ Lupus/ (T-1) Diabetes","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/8ycJt4lAlfQ\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You have an increased likelihood of diabetes, as well as obesity","pair":"AA","rsid":"rs9939609","title":"Diabetes and/or Obesity","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/XfyGv-xwjlI\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"Your susceptibility for your tendency to seek novelty is normal","pair":"TT","rsid":"rs1800955","title":"Novelty Seeking","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/YDnXcgOzadk\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You can definitely consume milk/lactose without gastrointestinal distress","pair":"TT","rsid":"rs4988235","title":"Lactose Intolerance","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/oBwtxdI1zvk\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You have a high likelihood of having the warrior gene","pair":"GG","rsid":"rs909525","title":"Warrior Gene (Behavioral Aggression)","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/jRIOgdz_AIM\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You may potentially have a lower affinity for cannabis","pair":"GG","rsid":"rs806380","title":"Cannabis Affinity","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/nEQ6JTNIImA\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You have a 2x increased risk of developing periodontitis","pair":"GG","rsid":"rs1537415","title":"Periodontitis (Gum inflammatory disease)","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/nk9bNV-_TbM\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You have a 9x increased risk for thrombosis","pair":"AA","rsid":"rs6025","title":"Thrombosis (Blood clotting)","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/zyDkiubLZQs\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"Makes your eyes blue","pair":"GG","rsid":"rs12913832","title":"Eye Color","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/MjBZaed9yzM\" frameborder=\"0\" allowfullscreen></iframe>"},{"outcome":"You may experience less explatory behavior, lower dopamine levels, increased response to stress","pair":"GG","rsid":"rs4680","title":"Dopamine and stress","video":"<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/Z79QqrZrzV4\" frameborder=\"0\" allowfullscreen></iframe>"}]};

  beforeEach(function(){
    module('genome.self', 'ngCookies');

    module(function($provide) {
      $provide.service('d3Service', d3Service);
    });
  });


  afterEach(inject(function ($httpBackend) {
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  beforeEach(inject(function($injector, _SelfFactory_) {
    
    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    SelfFactory = $injector.get('SelfFactory') || _SelfFactory_;
    $location = $injector.get('$location');
    $scope = $rootScope.$new();
    $cookies = $injector.get('$cookies');
    $cookies.user_profile_id = 'demo_id';
    $controller = $injector.get('$controller');
    $httpBackend.whenPOST('/api/snp_data').respond(200, '')

    createController = function () {
      return $controller('SelfController', {
        $rootScope: $rootScope,
        $cookies: $cookies,
        $scope: $scope,
        SelfFactory: SelfFactory,
        $location: $location,
        d3Service: d3Service
      });
    };
    createController();
  }));

  it('Should getsnps', function(){
    console.log($cookies);
    expect($scope.allOutcomes).to.deep.equal(outcomes)
  })

  it('Should have a self factory', function () {
    expect(SelfFactory).to.exist;
  });

  it('Should have a method `getSnps`', function () {
    expect(SelfFactory.getSnps).to.be.a('function');
  });

});
