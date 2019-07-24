var GIPHY_API_URL = 'https://api.giphy.com';
var GIPHY_PUB_KEY = 'TgTTdNPBINaTR3H90MOu25AP372HjQRw';

App = React.createClass ({
	getInitialState() {
		return {
			loading: false,
			searchingText: '',
			gif: {}
		};
	},

	handleSearch: function (searchingText) {
		this.setState({
			loading: true 
		});
		this.getGif(searchingText).then(gif => {
			this.setState({
				loading: false,
				gif: gif,
				searchingText: searchingText
			});		
		});
	},

	getGif: function(searchingText) {
		return new Promise(
			function (resolve, reject) {
				var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
				var xhr = new XMLHttpRequest();
				xhr.open('GET', url);
				xhr.onload = function() {
					if (xhr.status === 200) {
						var data = JSON.parse(xhr.responseText).data;
						var gif = {
							url: data.fixed_width_downsampled_url,
							sourceUrl: data.url
						};
						resolve(gif);
					} else {
						reject(new Error('Something went wrong'));
					}
				};
				xhr.send();
			}
		);
	},

<<<<<<< HEAD
	render: function () {
		var styles = {
			margin: '0 auto',
			textAlign: 'center',
			widht: '90%'
		};
		return (
			<div style={styles}>
				<h1>Gif Engine!</h1>
				<p>Find Gif on <a href='http://giphy.com'> giphy </a> .Press enter to get more gifs.</p>
				<Search onSearch={this.handleSearch}/>
				<Gif 
					loading={this.state.loading}
					url={this.state.gif.url}
					sourceUrl={this.state.gif.sourceUrl}
				/>
			</div>
		);
	}
=======
    handleSearch: function(searchingText) {  
        this.setState({
          loading: true  
        });
        this.getGif(searchingText)
            .then((response) => {
            this.setState({
                loading: false,
                gif: {
                    url : response.fixed_width_downsampled_url,
                    sourceUrl: response.url
                    },
                searchingText: searchingText
            });
        })
        .catch(() => { console.log('Coś poszło nie tak :(', )});
    },
    
      getGif: function(searchingText) {  
        var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;   
            
        return new Promise(
            function(resolve, reject) {
                let xhr = new XMLHttpRequest();  
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        let data = JSON.parse(xhr.responseText).data; 
                        let gif = {  
                            url: data.fixed_width_downsampled_url,
                            sourceUrl: data.url
                        };
                        resolve(gif); 
                    }
                    else {
                        reject(xhr.status);
                    }
                }
            xhr.open('GET', url);
            xhr.send();
    })    
    },

    render: function() {

        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return (
          <div style={styles}>
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href='https://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search onSearch={this.handleSearch}/>
                <Gif
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl}
                />
          </div>
        );
    }
>>>>>>> b055aee3fc027eb3fd7677c8bba025dbb67a9d2f
});

