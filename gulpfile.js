/**
 * gulpfile
 */

var gulp=require('gulp');
var replace=require('gulp-replace');
var rename=require('gulp-rename');
var prettify=require('gulp-js-prettify');
var uglify=require('gulp-uglify');
//
var _pm_str=`
	//module.declare float-math plugin
	(function(){
		module.declare('float-math',function(require,exports,module){
			//
			{ploaceholder}

			return FloatMath;
			//
		});
	})();
`;
//
var _define_str=`
	// require plugin
	define(function(){
		//
		{ploaceholder}
		//
		return FloatMath;
	});
`;
//
var _proto_start_str=`
(function(){
	//
`;
var _proto_end_str=`

})();
`;
var _proto_str=`
	// Number.prototype
	Number.prototype.add=function(num){
		//
		return FloatMath.add(this,num);
	}
	Number.prototype.sub=function(num){
		//
		return FloatMath.sub(this,num);
	}
	Number.prototype.mul=function(num){
		//
		return FloatMath.mul(this,num);
	}
	Number.prototype.div=function(num){
		//
		return FloatMath.div(this,num);
	}
`;
//
var _module_str=`
//
module.exports=exports=FloatMath;
`;
//
var _src='./template.js';
var _dest='./dest/';
var _dest_float_math_require='index.js';
var _dest_float_math_pm='pm/float-math.js';
var _dest_float_math_proto='proto/float-math.js';
var _dest_float_math_define='define/float-math.js';

var _start='/**{ float math start }**/';
var _end='/**{ float math end }**/';

var prettifyOptions={collapseWhitespace:true};
var uglifyOptions={
	mangle:{except:['require','exports','module']}
};

//
function ploaceholder(str){

	var ph=str.split('{ploaceholder}');
	//
	return [ph[0].trim(),ph[1].trim()];
}
//
function minfile(filename){

	return filename.replace(/\.js$/i,'.min.js');
}

//
gulp.task('require',function(){
	//
	return gulp
		.src(_src)
		.pipe(rename(_dest_float_math_require))
		.pipe(replace(_start,''))
		.pipe(replace(_end,_module_str))
		.pipe(prettify(prettifyOptions))
		.pipe(gulp.dest('./'));
});
//
gulp.task('pm',function(){
	var ph=ploaceholder(_pm_str);
	//
	return gulp
		.src(_src)
		.pipe(rename(_dest_float_math_pm))
		.pipe(replace(_start,ph[0]))
		.pipe(replace(_end,ph[1]))
		.pipe(prettify(prettifyOptions))
		.pipe(gulp.dest(_dest))
		.pipe(rename(minfile(_dest_float_math_pm)))
		.pipe(uglify(uglifyOptions))
		.pipe(gulp.dest(_dest));
});
//
gulp.task('proto',function(){
	//
	return gulp
		.src(_src)
		.pipe(rename(_dest_float_math_proto))
		.pipe(replace(_start,_proto_start_str))
		.pipe(replace(_end,_proto_str+_proto_end_str))
		.pipe(prettify(prettifyOptions))
		.pipe(gulp.dest(_dest))
		.pipe(rename(minfile(_dest_float_math_proto)))
		.pipe(uglify(uglifyOptions))
		.pipe(gulp.dest(_dest));
});
//
gulp.task('define',function(){
	var ph=ploaceholder(_define_str);
	//
	return gulp
		.src(_src)
		.pipe(rename(_dest_float_math_define))
		.pipe(replace(_start,ph[0]))
		.pipe(replace(_end,ph[1]))
		.pipe(prettify(prettifyOptions))
		.pipe(gulp.dest(_dest))
		.pipe(rename(minfile(_dest_float_math_define)))
		.pipe(uglify(uglifyOptions))
		.pipe(gulp.dest(_dest));
});

//
gulp.task('default',['require','pm','proto','define']);

module.exports=gulp;