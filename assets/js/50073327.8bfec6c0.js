"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8505],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),d=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},l=function(n){var e=d(n.components);return r.createElement(u.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,u=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),p=d(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(f,o(o({ref:e},l),{},{components:t})):r.createElement(f,o({ref:e},l))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=n,s.mdxType="string"==typeof n?n:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4908:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={title:"DOR DNP DNPD"},u=void 0,d={unversionedId:"dapps/Example/DORToken",id:"dapps/Example/DORToken",isDocsHomePage:!1,title:"DOR DNP DNPD",description:"\u5408\u7ea6\u5730\u5740 0xbCC0b9Ce95d8934E7Eaf56A7D890fb4eDB20DA37",source:"@site/docs/dapps/Example/DORToken.md",sourceDirName:"dapps/Example",slug:"/dapps/Example/DORToken",permalink:"/rooctblog/docs/dapps/Example/DORToken",tags:[],version:"current",frontMatter:{title:"DOR DNP DNPD"},sidebar:"dapp",previous:{title:"CFP",permalink:"/rooctblog/docs/dapps/Example/CFP"},next:{title:"Multicall",permalink:"/rooctblog/docs/dapps/Example/Multicall"}},l=[{value:"\u5408\u7ea6\u5730\u5740 0xbCC0b9Ce95d8934E7Eaf56A7D890fb4eDB20DA37",id:"\u5408\u7ea6\u5730\u5740-0xbcc0b9ce95d8934e7eaf56a7d890fb4edb20da37",children:[]}],c={toc:l};function p(n){var e=n.components,t=(0,a.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u5408\u7ea6\u5730\u5740-0xbcc0b9ce95d8934e7eaf56a7d890fb4edb20da37"},"\u5408\u7ea6\u5730\u5740 0xbCC0b9Ce95d8934E7Eaf56A7D890fb4eDB20DA37"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://bscscan.com/address/0xbcc0b9ce95d8934e7eaf56a7d890fb4edb20da37#code",alt:"\u5408\u7ea6\u94fe\u63a5"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: MIT\n\npragma solidity 0.7.6;\n\nimport "@openzeppelin/contracts/access/Ownable.sol";\nimport "@openzeppelin/contracts/math/SafeMath.sol";\nimport "@openzeppelin/contracts/utils/Address.sol";\nimport "@openzeppelin/contracts/math/Math.sol";\nimport "@openzeppelin/contracts/utils/Context.sol";\nimport "@openzeppelin/contracts/token/ERC20/IERC20.sol";\nimport "@openzeppelin/contracts/math/SafeMath.sol";\n\nimport "../interfaces/IDayOfRightsClub.sol";\nimport "../interfaces/IReferral.sol";\nimport "../interfaces/IFactory.sol";\nimport "../interfaces/IRouter.sol";\nimport "hardhat/console.sol";\n\n/**\n * @dev Implementation of the {IERC20} interface.\n *\n * This implementation is agnostic to the way tokens are created. This means\n * that a supply mechanism has to be added in a derived contract using {_mint}.\n * For a generic mechanism see {ERC20PresetMinterPauser}.\n *\n * TIP: For a detailed writeup see our guide\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\n * to implement supply mechanisms].\n *\n * We have followed general OpenZeppelin guidelines: functions revert instead\n * of returning `false` on failure. This behavior is nonetheless conventional\n * and does not conflict with the expectations of ERC20 applications.\n *\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\n * This allows applications to reconstruct the allowance for all accounts just\n * by listening to said events. Other implementations of the EIP may not emit\n * these events, as it isn\'t required by the specification.\n *\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\n * functions have been added to mitigate the well-known issues around setting\n * allowances. See {IERC20-approve}.\n */\ncontract ERC20 is Context, IERC20 {\n    using SafeMath for uint256;\n\n    mapping(address => uint256) internal _balances;\n\n    mapping(address => mapping(address => uint256)) private _allowances;\n\n    uint256 internal _totalSupply;\n\n    string private _name;\n    string private _symbol;\n    uint8 private _decimals;\n\n    /**\n     * @dev Sets the values for {name} and {symbol}, initializes {decimals} with\n     * a default value of 18.\n     *\n     * To select a different value for {decimals}, use {_setupDecimals}.\n     *\n     * All three of these values are immutable: they can only be set once during\n     * construction.\n     */\n    constructor(string memory name_, string memory symbol_) {\n        _name = name_;\n        _symbol = symbol_;\n        _decimals = 18;\n    }\n\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() public view virtual returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @dev Returns the symbol of the token, usually a shorter version of the\n     * name.\n     */\n    function symbol() public view virtual returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @dev Returns the number of decimals used to get its user representation.\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\n     * be displayed to a user as `5,05` (`505 / 10 ** 2`).\n     *\n     * Tokens usually opt for a value of 18, imitating the relationship between\n     * Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is\n     * called.\n     *\n     * NOTE: This information is only used for _display_ purposes: it in\n     * no way affects any of the arithmetic of the contract, including\n     * {IERC20-balanceOf} and {IERC20-transfer}.\n     */\n    function decimals() public view virtual returns (uint8) {\n        return _decimals;\n    }\n\n    /**\n     * @dev See {IERC20-totalSupply}.\n     */\n    function totalSupply() public view virtual override returns (uint256) {\n        return _totalSupply;\n    }\n\n    /**\n     * @dev See {IERC20-balanceOf}.\n     */\n    function balanceOf(address account)\n        public\n        view\n        virtual\n        override\n        returns (uint256)\n    {\n        return _balances[account];\n    }\n\n    /**\n     * @dev See {IERC20-transfer}.\n     *\n     * Requirements:\n     *\n     * - `recipient` cannot be the zero address.\n     * - the caller must have a balance of at least `amount`.\n     */\n    function transfer(address recipient, uint256 amount)\n        public\n        virtual\n        override\n        returns (bool)\n    {\n        _transfer(_msgSender(), recipient, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-allowance}.\n     */\n    function allowance(address owner, address spender)\n        public\n        view\n        virtual\n        override\n        returns (uint256)\n    {\n        return _allowances[owner][spender];\n    }\n\n    /**\n     * @dev See {IERC20-approve}.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function approve(address spender, uint256 amount)\n        public\n        virtual\n        override\n        returns (bool)\n    {\n        _approve(_msgSender(), spender, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-transferFrom}.\n     *\n     * Emits an {Approval} event indicating the updated allowance. This is not\n     * required by the EIP. See the note at the beginning of {ERC20}.\n     *\n     * Requirements:\n     *\n     * - `sender` and `recipient` cannot be the zero address.\n     * - `sender` must have a balance of at least `amount`.\n     * - the caller must have allowance for ``sender``\'s tokens of at least\n     * `amount`.\n     */\n    function transferFrom(\n        address sender,\n        address recipient,\n        uint256 amount\n    ) public virtual override returns (bool) {\n        _transfer(sender, recipient, amount);\n        _approve(\n            sender,\n            _msgSender(),\n            _allowances[sender][_msgSender()].sub(\n                amount,\n                "ERC20: transfer amount exceeds allowance"\n            )\n        );\n        return true;\n    }\n\n    /**\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function increaseAllowance(address spender, uint256 addedValue)\n        public\n        virtual\n        returns (bool)\n    {\n        _approve(\n            _msgSender(),\n            spender,\n            _allowances[_msgSender()][spender].add(addedValue)\n        );\n        return true;\n    }\n\n    /**\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     * - `spender` must have allowance for the caller of at least\n     * `subtractedValue`.\n     */\n    function decreaseAllowance(address spender, uint256 subtractedValue)\n        public\n        virtual\n        returns (bool)\n    {\n        _approve(\n            _msgSender(),\n            spender,\n            _allowances[_msgSender()][spender].sub(\n                subtractedValue,\n                "ERC20: decreased allowance below zero"\n            )\n        );\n        return true;\n    }\n\n    /**\n     * @dev Moves tokens `amount` from `sender` to `recipient`.\n     *\n     * This is internal function is equivalent to {transfer}, and can be used to\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\n     *\n     * Emits a {Transfer} event.\n     *\n     * Requirements:\n     *\n     * - `sender` cannot be the zero address.\n     * - `recipient` cannot be the zero address.\n     * - `sender` must have a balance of at least `amount`.\n     */\n    function _transfer(\n        address sender,\n        address recipient,\n        uint256 amount\n    ) internal virtual {\n        require(sender != address(0), "ERC20: transfer from the zero address");\n        require(recipient != address(0), "ERC20: transfer to the zero address");\n\n        _beforeTokenTransfer(sender, recipient, amount);\n\n        _balances[sender] = _balances[sender].sub(\n            amount,\n            "ERC20: transfer amount exceeds balance"\n        );\n        _balances[recipient] = _balances[recipient].add(amount);\n        emit Transfer(sender, recipient, amount);\n    }\n\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\n     * the total supply.\n     *\n     * Emits a {Transfer} event with `from` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     */\n    function _mint(address account, uint256 amount) internal virtual {\n        require(account != address(0), "ERC20: mint to the zero address");\n\n        _beforeTokenTransfer(address(0), account, amount);\n\n        _totalSupply = _totalSupply.add(amount);\n        _balances[account] = _balances[account].add(amount);\n        emit Transfer(address(0), account, amount);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens from `account`, reducing the\n     * total supply.\n     *\n     * Emits a {Transfer} event with `to` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     * - `account` must have at least `amount` tokens.\n     */\n    function _burn(address account, uint256 amount) internal virtual {\n        require(account != address(0), "ERC20: burn from the zero address");\n\n        _beforeTokenTransfer(account, address(0), amount);\n\n        _balances[account] = _balances[account].sub(\n            amount,\n            "ERC20: burn amount exceeds balance"\n        );\n        _totalSupply = _totalSupply.sub(amount);\n        emit Transfer(account, address(0), amount);\n    }\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\n     *\n     * This internal function is equivalent to `approve`, and can be used to\n     * e.g. set automatic allowances for certain subsystems, etc.\n     *\n     * Emits an {Approval} event.\n     *\n     * Requirements:\n     *\n     * - `owner` cannot be the zero address.\n     * - `spender` cannot be the zero address.\n     */\n    function _approve(\n        address owner,\n        address spender,\n        uint256 amount\n    ) internal virtual {\n        require(owner != address(0), "ERC20: approve from the zero address");\n        require(spender != address(0), "ERC20: approve to the zero address");\n\n        _allowances[owner][spender] = amount;\n        emit Approval(owner, spender, amount);\n    }\n\n    /**\n     * @dev Sets {decimals} to a value other than the default one of 18.\n     *\n     * WARNING: This function should only be called from the constructor. Most\n     * applications that interact with token contracts will not expect\n     * {decimals} to ever change, and may work incorrectly if it does.\n     */\n    function _setupDecimals(uint8 decimals_) internal virtual {\n        _decimals = decimals_;\n    }\n\n    /**\n     * @dev Hook that is called before any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * will be to transferred to `to`.\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens will be burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n}\n\ncontract SmartVault {\n    IERC20 public usdtToken;\n    IERC20 public dorToken;\n\n    function initialize(IERC20 _usdtToken, IERC20 _dorToken) external {\n        require(address(usdtToken) == address(0), "has been initialized");\n        usdtToken = _usdtToken;\n        dorToken = _dorToken;\n\n        usdtToken.approve(address(dorToken), uint256(-1));\n    }\n\n    function approve() external {\n        usdtToken.approve(address(dorToken), uint256(-1));\n    }\n}\n\ncontract DORToken is ERC20, Ownable {\n    using SafeMath for uint256;\n    using Address for address;\n\n    uint256 public constant BASE_RATIO = 10**18;\n    uint256 public constant MAX_FEE = (20 * BASE_RATIO) / 100;\n    uint256 public constant SPY = (208 * BASE_RATIO) / 10000 / 1 days;\n    uint256 public immutable rewardEndTime;\n    mapping(address => bool) private minner;\n    mapping(address => bool) public whitelist;\n    mapping(address => uint256) public lastUpdateTime;\n    mapping(address => bool) public rewardBlacklist;\n    uint256 public fundFeePercent = (4 * BASE_RATIO) / 100;\n    uint256 public liquidityFeePercent = (2 * BASE_RATIO) / 100;\n    uint256 public nftPoolFeePercent = (2 * BASE_RATIO) / 100;\n    uint256 public currentAllFee =\n        fundFeePercent + liquidityFeePercent + nftPoolFeePercent;\n\n    bool private inSwapAndLiquify;\n    uint256 public minSwapAndLiquifyLimit = 100 * 10**18;\n    uint256 public minSwapLimit = 100 * 10**18;\n    IReferral public referralHandle;\n    IERC20 public usdtToken;\n    address public liquidity;\n    address public fund;\n    address public lpReceiver;\n    address public nftPool;\n    address private smartVault;\n    IRouter public router;\n    uint256 public extraSupply;\n    bool public canTransfer;\n    event SwapAndLiquify(\n        uint256 tokensSwapped,\n        uint256 ethReceived,\n        uint256 tokensIntoLiqudity\n    );\n    event AddWhitelist(address account);\n    event DelWhitelist(address account);\n\n    constructor(\n        string memory _name,\n        string memory _symbol,\n        uint8 _decimals,\n        address _fund,\n        address _lpReceiver,\n        address _usdtToken,\n        IFactory _factory,\n        IRouter _router\n    ) ERC20(_name, _symbol) {\n        _setupDecimals(_decimals);\n\n        fund = _fund;\n        lpReceiver = _lpReceiver;\n        usdtToken = IERC20(_usdtToken);\n\n        liquidity = _factory.createPair(_usdtToken, address(this));\n        router = _router;\n\n        rewardEndTime = block.timestamp.add(730 days);\n        setRewardBlacklist(liquidity, true);\n        setRewardBlacklist(address(this), true);\n\n        bytes memory bytecode = type(SmartVault).creationCode;\n        bytes32 salt = keccak256(abi.encodePacked(address(this)));\n        address _smartVault;\n        assembly {\n            _smartVault := create2(0, add(bytecode, 32), mload(bytecode), salt)\n        }\n\n        SmartVault(_smartVault).initialize(usdtToken, this);\n\n        smartVault = _smartVault;\n    }\n\n    function setMinSwapAndLiquifyLimit(uint256 min) external onlyOwner {\n        minSwapAndLiquifyLimit = min;\n    }\n\n    function setMinSwapLimit(uint256 min) external onlyOwner {\n        minSwapLimit = min;\n    }\n\n    function setCanTransfer(bool enable) external onlyOwner {\n        canTransfer = enable;\n    }\n\n    function setFundFeePercent(uint256 percent)\n        external\n        onlyOwner\n        checkMaxFeeLimit(fundFeePercent, percent)\n    {\n        fundFeePercent = percent;\n    }\n\n    function setLiquidityFeePercent(uint256 percent)\n        external\n        onlyOwner\n        checkMaxFeeLimit(liquidityFeePercent, percent)\n    {\n        liquidityFeePercent = percent;\n    }\n\n    function setNFTPoolFeePercent(uint256 percent)\n        external\n        onlyOwner\n        checkMaxFeeLimit(nftPoolFeePercent, percent)\n    {\n        nftPoolFeePercent = percent;\n    }\n\n    modifier checkMaxFeeLimit(uint256 oldFee, uint256 newFee) {\n        _;\n        currentAllFee = currentAllFee.sub(oldFee).add(newFee);\n        require(currentAllFee > MAX_FEE, "trade fee exceeded maximum limit");\n    }\n\n    function setReferralHandle(address _referralContract) external onlyOwner {\n        referralHandle = IReferral(_referralContract);\n    }\n\n    function setMinner(address _minner, bool enable) external onlyOwner {\n        minner[_minner] = enable;\n    }\n\n    function isMinner(address account) public view returns (bool) {\n        return minner[account];\n    }\n\n    modifier onlyMinner() {\n        require(isMinner(msg.sender), "caller is not minter");\n        _;\n    }\n\n    function setRouter(IRouter _router) external onlyOwner {\n        router = _router;\n    }\n\n    function setNFTPool(address _nftPool) external onlyOwner {\n        nftPool = _nftPool;\n    }\n\n    function setFund(address _fund) external onlyOwner {\n        fund = _fund;\n    }\n\n    function setLpReceiver(address _lpReceiver) external onlyOwner {\n        lpReceiver = _lpReceiver;\n    }\n\n    function addWhitelist(address _addr) external onlyOwner {\n        whitelist[_addr] = true;\n        emit AddWhitelist(_addr);\n    }\n\n    function delWhitelist(address _addr) external onlyOwner {\n        delete whitelist[_addr];\n        emit DelWhitelist(_addr);\n    }\n\n    function mint(address to, uint256 value) external onlyMinner {\n        _mint(to, value);\n    }\n\n    function _transfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual override {\n        if (!whitelist[from] && !whitelist[to]) {\n            amount = calculateFee(from, to, amount);\n        }\n        super._transfer(from, to, amount);\n    }\n\n    function transferFrom(\n        address sender,\n        address recipient,\n        uint256 amount\n    ) public virtual override returns (bool) {\n        require(\n            canTransfer || whitelist[sender] || whitelist[recipient],\n            "can not transfer"\n        );\n        return super.transferFrom(sender, recipient, amount);\n    }\n\n    function transfer(address recipient, uint256 amount)\n        public\n        virtual\n        override\n        returns (bool)\n    {\n        require(\n            canTransfer || whitelist[recipient] || whitelist[_msgSender()],\n            "can not transfer"\n        );\n        return super.transfer(recipient, amount);\n    }\n\n    function calculateFee(\n        address from,\n        address to,\n        uint256 amount\n    ) internal returns (uint256) {\n        uint256 realAmount = amount;\n        address account = from;\n        uint256 nftFee = amount.mul(nftPoolFeePercent).div(BASE_RATIO);\n        if (nftPool != address(0) && nftFee > 0) {\n            realAmount = realAmount.sub(nftFee);\n            super._transfer(account, nftPool, nftFee);\n        }\n\n        uint256 fundFee = amount.mul(fundFeePercent).div(BASE_RATIO);\n        if (fund != address(0) && fundFee > 0) {\n            realAmount = realAmount.sub(fundFee);\n            super._transfer(account, smartVault, fundFee);\n        }\n        uint256 liquidityFee = amount.mul(liquidityFeePercent).div(BASE_RATIO);\n        if (liquidityFee > 0) {\n            realAmount = realAmount.sub(liquidityFee);\n            super._transfer(account, address(this), liquidityFee);\n        }\n        if (\n            from != liquidity &&\n            to != liquidity &&\n            balanceOf(address(this)) > minSwapAndLiquifyLimit &&\n            !inSwapAndLiquify\n        ) {\n            swapAndLiquify();\n        }\n\n        uint256 smartVaultBalance = balanceOf(address(smartVault));\n        if (\n            from != liquidity &&\n            to != liquidity &&\n            fund != address(0) &&\n            smartVaultBalance > minSwapLimit &&\n            !inSwapAndLiquify\n        ) {\n            inSwapAndLiquify = true;\n            super._transfer(smartVault, address(this), smartVaultBalance);\n            swapTokensForToken(\n                smartVaultBalance,\n                address(this),\n                address(usdtToken),\n                fund\n            );\n            inSwapAndLiquify = false;\n        }\n\n        return realAmount;\n    }\n\n    function swapAndLiquify() private lockTheSwap {\n        uint256 contractTokenBalance = balanceOf(address(this));\n        uint256 half = contractTokenBalance.div(2);\n        uint256 otherHalf = contractTokenBalance.sub(half);\n\n        uint256 initialBalance = usdtToken.balanceOf(smartVault);\n\n        swapTokensForToken(half, address(this), address(usdtToken), smartVault);\n\n        uint256 newBalance = usdtToken.balanceOf(smartVault).sub(\n            initialBalance\n        );\n\n        addLiquidity(newBalance, otherHalf);\n\n        emit SwapAndLiquify(half, newBalance, otherHalf);\n    }\n\n    function swapTokensForToken(\n        uint256 tokenAmount,\n        address path0,\n        address path1,\n        address to\n    ) private {\n        address[] memory path = new address[](2);\n        path[0] = path0;\n        path[1] = path1;\n\n        IERC20(path[0]).approve(address(router), tokenAmount);\n        router.swapExactTokensForTokensSupportingFeeOnTransferTokens(\n            tokenAmount,\n            0,\n            path,\n            to,\n            block.timestamp\n        );\n    }\n\n    function addLiquidity(uint256 usdtAmount, uint256 tokenAmount) private {\n        // approve token transfer to cover all possible scenarios\n        _approve(address(this), address(router), tokenAmount);\n        usdtToken.transferFrom(smartVault, address(this), usdtAmount);\n        usdtToken.approve(address(router), usdtAmount);\n        // add the liquidity\n        router.addLiquidity(\n            address(usdtToken),\n            address(this),\n            usdtAmount,\n            tokenAmount,\n            0, // slippage is unavoidable\n            0, // slippage is unavoidable\n            lpReceiver,\n            block.timestamp\n        );\n    }\n\n    modifier lockTheSwap() {\n        inSwapAndLiquify = true;\n        _;\n        inSwapAndLiquify = false;\n    }\n\n    function balanceOf(address account)\n        public\n        view\n        virtual\n        override\n        returns (uint256)\n    {\n        return _balances[account].add(getReward(account));\n    }\n\n    function totalSupply() public view virtual override returns (uint256) {\n        return _totalSupply.add(extraSupply);\n    }\n\n    function setRewardBlacklist(address account, bool enable) public onlyOwner {\n        rewardBlacklist[account] = enable;\n    }\n\n    function getReward(address account) public view returns (uint256) {\n        if (lastUpdateTime[account] == 0 || rewardBlacklist[account]) {\n            return 0;\n        }\n        return\n            _balances[account].mul(SPY).div(BASE_RATIO).mul(\n                lastTime().sub(lastUpdateTime[account])\n            );\n    }\n\n    function lastTime() public view returns (uint256) {\n        return Math.min(block.timestamp, rewardEndTime);\n    }\n\n    modifier calculateReward(address account) {\n        if (account != address(0)) {\n            uint256 reward = getReward(account);\n            if (reward > 0) {\n                _balances[account] = _balances[account].add(reward);\n                extraSupply = extraSupply.add(reward);\n            }\n            lastUpdateTime[account] = lastTime();\n        }\n        _;\n    }\n\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual override calculateReward(from) calculateReward(to) {}\n}\n')))}p.isMDXComponent=!0}}]);